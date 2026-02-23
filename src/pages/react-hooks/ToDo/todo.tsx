import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import backgroundImage from "../assets/background.jpg";
import moonImage from "../assets/Combined Shape.png";
import React from "react";

type FilterType = "all" | "active" | "completed";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

const initialTodos: Todo[] = [
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false }
];

export default function TodoPage() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState<FilterType>("all");
    const [draggedTodoId, setDraggedTodoId] = useState<number | null>(null);
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [sort, setSort] = useState<"newest" | "oldest">("newest");
    const [searchTerm, setSearchTerm] = useState("");

    // --- Tambahan untuk edit inline ---
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
    const [editingValue, setEditingValue] = useState("");
    const editingInputRef = useRef<HTMLInputElement | null>(null);

    const filteredTodos = useMemo(() => {
        let result = todos;
        if (filter === "active") return todos.filter((todo) => !todo.completed);
        if (filter === "completed") return todos.filter((todo) => todo.completed);
        // Sorting by sort state
        result = [...result].sort((a, b) =>
        sort === "newest"
            ? b.id - a.id 
            : a.id - b.id
    );
        // Filter by search term
        if (searchTerm.trim()) {
            const keyword = searchTerm.trim().toLowerCase();
            result = result.filter(todo => todo.text.toLowerCase().includes(keyword));
        }

        return result;
       
    }, [filter, todos, sort, searchTerm]);

    const itemsLeft = useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

    const addTodo = () => {
        const trimmed = newTodo.trim();
        if (!trimmed) return;

        const todo: Todo = {
            id: Date.now(),
            text: trimmed,
            completed: false
        };

        setTodos((prev) => [...prev, todo]);
        setNewTodo("");
        inputRef.current?.focus();
    };

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") addTodo();
    };

    const toggleTodo = (todoId: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    const handleDragStart = (todoId: number) => {
        setDraggedTodoId(todoId);
    };

    const handleDrop = (targetTodoId: number) => {
        if (draggedTodoId === null || draggedTodoId === targetTodoId) return;

        setTodos((prev) => {
            const draggedIndex = prev.findIndex((todo) => todo.id === draggedTodoId);
            const targetIndex = prev.findIndex((todo) => todo.id === targetTodoId);
            if (draggedIndex === -1 || targetIndex === -1) return prev;

            const updated = [...prev];
            const [draggedTodo] = updated.splice(draggedIndex, 1);
            updated.splice(targetIndex, 0, draggedTodo);
            return updated;
        });

        setDraggedTodoId(null);
    };

    // --- Edit inline logic ---
    const handleTodoDoubleClick = (todoId: number, currentText: string) => {
        setEditingTodoId(todoId);
        setEditingValue(currentText);
    };

    const handleEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingValue(event.target.value);
    };

    const handleEditInputKeyDown = (event: KeyboardEvent<HTMLInputElement>, todoId: number) => {
        if (event.key === "Enter") {
            const trimmed = editingValue.trim();
            if (trimmed) {
                setTodos((prev) =>
                    prev.map((todo) =>
                        todo.id === todoId ? { ...todo, text: trimmed } : todo
                    )
                );
            }
            setEditingTodoId(null);
        }
        if (event.key === "Escape") {
            setEditingTodoId(null);
        }
    };

    const handleEditInputBlur = (todoId: number) => {
        const trimmed = editingValue.trim();
        if (trimmed) {
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === todoId ? { ...todo, text: trimmed } : todo
                )
            );
        }
        setEditingTodoId(null);
    };

    // Autofocus input saat mulai edit
    React.useEffect(() => {
        if (editingTodoId !== null) {
            editingInputRef.current?.focus();
        }
    }, [editingTodoId]);

    return (
        <>
            <div
                className="absolute top-0 left-0 right-0 h-[300px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            
            

            <div className="relative max-w-md mx-auto pt-12 px-4 min-h-screen">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-white text-4xl font-bold tracking-[0.5em]">TODO</h1>
                    <img src={moonImage} alt="Bulan" className="w-6 h-6" />
                </div>

                <div className="bg-white rounded-md shadow-md p-4 mb-6">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-600 text-base focus:outline-none placeholder-gray-400"
                        value={newTodo}
                        onChange={(event) => setNewTodo(event.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                </div>
                {/* Search bar */}
                <div className="bg-white rounded-md shadow-md p-4 mb-3">
                    <input
                        type="text"
                        placeholder="Search todo..."
                        className="w-full text-base text-gray-600 focus:outline-none placeholder-gray-400"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="bg-white rounded-md shadow-md overflow-hidden">
                    <div className="divide-y divide-gray-200">
                        {filteredTodos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition"
                                draggable
                                onDragStart={() => handleDragStart(todo.id)}
                                onDragOver={(event) => event.preventDefault()}
                                onDrop={() => handleDrop(todo.id)}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleTodo(todo.id)}
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                        todo.completed
                                            ? "border-blue-500 bg-gradient-to-br from-blue-400 to-purple-500"
                                            : "border-gray-300"
                                    }`}
                                >
                                    {todo.completed && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </button>
                                {/* Inline Edit */}
                                {editingTodoId === todo.id ? (
                                    <input
                                        ref={editingInputRef}
                                        type="text"
                                        className="ml-4 flex-1 text-base text-gray-700 border-b border-blue-400 outline-none bg-transparent"
                                        value={editingValue}
                                        onChange={handleEditInputChange}
                                        onBlur={() => handleEditInputBlur(todo.id)}
                                        onKeyDown={(e) => handleEditInputKeyDown(e, todo.id)}
                                    />
                                ) : (
                                    <span
                                        className={`ml-4 flex-1 ${
                                            todo.completed
                                                ? "text-gray-400 line-through"
                                                : "text-gray-700"
                                        }`}
                                        onDoubleClick={() => handleTodoDoubleClick(todo.id, todo.text)}
                                        title="Double click to edit"
                                        style={{ cursor: "text" }}
                                    >
                                        {todo.text}
                                    </span>
                                )}
                                
                            </div>
                        ))}
                    </div>
                    

                    <div className="flex items-center justify-between p-4 text-xs text-gray-500">
                        <span>{itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left</span>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                className={
                                    filter === "all"
                                        ? "text-blue-600 font-bold hover:text-blue-800"
                                        : "hover:text-gray-700"
                                }
                                onClick={() => setFilter("all")}
                            >
                                All
                            </button>
                            <button
                                type="button"
                                className={
                                    filter === "active"
                                        ? "text-blue-600 font-bold hover:text-blue-800"
                                        : "hover:text-gray-700"
                                }
                                onClick={() => setFilter("active")}
                            >
                                Active
                            </button>
                            <button
                                type="button"
                                className={
                                    filter === "completed"
                                        ? "text-blue-600 font-bold hover:text-blue-800"
                                        : "hover:text-gray-700"
                                }
                                onClick={() => setFilter("completed")}
                            >
                                Completed
                            </button>
                        </div>

                        <button type="button" className="hover:text-gray-700" onClick={clearCompleted}>
                            Clear Completed
                        </button>
                    </div>
                    <div className="flex gap-3 px-3 py-1 justify-end">
                        <button
                            type="button"
                            className={
                                sort === "newest"
                                    ? "text-blue-600 font-bold hover:text-blue-800"
                                    : "hover:text-gray-700"
                            }
                            onClick={() => setSort("newest")}
                        >
                            Newest
                        </button>
                        <button
                            type="button"
                            className={
                                sort === "oldest"
                                    ? "text-blue-600 font-bold hover:text-blue-800"
                                    : "hover:text-gray-700"
                            }
                            onClick={() => setSort("oldest")}
                        >
                            Oldest
                        </button>
                    </div>
                </div>

                <p className="text-center text-gray-300 text-sm mt-12 mb-8">Drag and drop to reorder list</p>
            </div>
        </>
    );
}
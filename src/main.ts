import './style.css'
import backgroundImage from './assets/background.jpg'
import moonIcon from './assets/Combined Shape.png'
import { initTodoApp } from './todo.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main class="min-h-screen bg-gray-100">
    <!-- Background Image Section with 300px height -->
                <div class="absolute top-0 left-0 right-0 h-[300px] bg-[length:100%_100%] bg-center bg-no-repeat" style="background-image: url('${backgroundImage}');"></div>
    
    <!-- Todo App Container (Centered & Overlay) -->
    <div class="relative max-w-md mx-auto pt-12 px-4 min-h-screen">
        <!-- Header with TODO title -->
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-white text-4xl font-bold tracking-[0.5em]">TODO</h1>
            <img src="${moonIcon}" alt="Bulan" class="w-6 h-6">
        </div>
        
        <!-- Input for creating new todo -->
        <div class="bg-white rounded-md shadow-md p-4 mb-6">
            <input 
                type="text" 
                placeholder="Create a new todo..." 
                class="w-full text-gray-600 text-base focus:outline-none placeholder-gray-400"
                id="todoInput"
            >
        </div>
        
        <!-- Todo List Container -->
        <div class="bg-white rounded-md shadow-md overflow-hidden">
            <!-- Todo Items -->
            <div class="divide-y divide-gray-200" id="todoList">
                <!-- Completed Todo -->
                <div class="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition" draggable="true">
                    <div class="relative flex items-center">
                        <input 
                            type="checkbox" 
                            checked 
                            class="appearance-none w-5 h-5 rounded-full border-2 border-blue-500 cursor-pointer checked:bg-gradient-to-br checked:from-blue-400 checked:to-purple-500"
                        >
                        <svg class="absolute left-1 top-1 w-3 h-3 text-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span class="ml-4 text-gray-400 line-through">Complete online JavaScript course</span>
                </div>

                <!-- Active Todos -->
                <div class="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition" draggable="true">
                    <div class="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <span class="ml-4 text-gray-700">Jog around the park 3x</span>
                </div>

                <div class="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition" draggable="true">
                    <div class="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <span class="ml-4 text-gray-700">10 minutes meditation</span>
                </div>

                <div class="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition" draggable="true">
                    <div class="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <span class="ml-4 text-gray-700">Read for 1 hour</span>
                </div>

                <div class="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition" draggable="true">
                    <div class="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <span class="ml-4 text-gray-700">Pick up groceries</span>
                </div>

                <div class="flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition" draggable="true">
                    <div class="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <span class="ml-4 text-gray-700">Complete Todo App on Frontend Mentor</span>
                </div>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between p-4 text-xs text-gray-500">
                <span id="itemsLeft">5 items left</span>
                
                <div class="flex gap-3">
                    <button class="text-blue-600 font-bold hover:text-blue-800">All</button>
                    <button class="hover:text-gray-700">Active</button>
                    <button class="hover:text-gray-700">Completed</button>
                </div>

                <button class="hover:text-gray-700">Clear Completed</button>
            </div>
        </div>

        <!-- Drag and Drop Text -->
        <p class="text-center text-gray-300 text-sm mt-12 mb-8">Drag and drop to reorder list</p>
    </div>
    
    </main>
`
initTodoApp()

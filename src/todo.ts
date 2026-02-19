export function initTodoApp(): void {
  const todoInput = document.getElementById('todoInput') as HTMLInputElement | null
  const todoList = document.getElementById('todoList') as HTMLDivElement | null
  const itemsLeft = document.getElementById('itemsLeft') as HTMLSpanElement | null

  if (!todoInput || !todoList || !itemsLeft) {
    throw new Error('Todo elements not found in DOM')
  }

  const completedIndicator = `
    <div class="appearance-none w-5 h-5 rounded-full border-2 border-blue-500 bg-gradient-to-br from-blue-400 to-purple-500"></div>
    <svg class="absolute left-1 top-1 w-3 h-3 text-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
    </svg>
  `

  function setItemCompletedState(item: HTMLDivElement, completed: boolean): void {
    const indicator = item.querySelector(':scope > div') as HTMLDivElement | null
    const label = item.querySelector('span') as HTMLSpanElement | null

    if (!indicator || !label) {
      return
    }

    if (completed) {
      indicator.className = 'relative flex items-center'
      indicator.innerHTML = completedIndicator
      label.classList.add('line-through', 'text-gray-400')
      label.classList.remove('text-gray-700')
    } else {
      indicator.className = 'w-5 h-5 rounded-full border-2 border-gray-300'
      indicator.innerHTML = ''
      label.classList.remove('line-through', 'text-gray-400')
      label.classList.add('text-gray-700')
    }
  }

  function updateItemsLeft(): void {
    const activeCount = todoList.querySelectorAll('span.text-gray-700').length
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`
  }

  function createTodoItem(text: string): HTMLDivElement {
    const item = document.createElement('div')
    item.className = 'flex items-center p-4 group cursor-pointer hover:bg-gray-50 transition'
    item.draggable = true
    item.innerHTML = `
      <div class="w-5 h-5 rounded-full border-2 border-gray-300"></div>
      <span class="ml-4 text-gray-700">${text}</span>
    `
    return item
  }

  function addTodo(text: string): void {
    const todoItem = createTodoItem(text)
    todoList.appendChild(todoItem)
    updateItemsLeft()
  }

  todoInput.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key !== 'Enter') {
      return
    }

    const text = todoInput.value.trim()
    if (!text) {
      return
    }

    addTodo(text)
    todoInput.value = ''
  })

  todoList.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const todoItem = target.closest('div[draggable="true"]') as HTMLDivElement | null

    if (!todoItem || !todoList.contains(todoItem)) {
      return
    }

    const label = todoItem.querySelector('span') as HTMLSpanElement | null
    if (!label) {
      return
    }

    const completed = label.classList.contains('line-through')
    setItemCompletedState(todoItem, !completed)
    updateItemsLeft()
  })

  let draggedElement: HTMLDivElement | null = null

  todoList.addEventListener('dragstart', (event: DragEvent) => {
    const target = event.target as HTMLElement
    const todoItem = target.closest('div[draggable="true"]') as HTMLDivElement | null

    if (!todoItem) {
      return
    }

    draggedElement = todoItem
    todoItem.style.opacity = '0.5'
  })

  todoList.addEventListener('dragend', (event: DragEvent) => {
    const target = event.target as HTMLElement
    const todoItem = target.closest('div[draggable="true"]') as HTMLDivElement | null

    if (!todoItem) {
      return
    }

    todoItem.style.opacity = ''
  })

  todoList.addEventListener('dragover', (event: DragEvent) => {
    event.preventDefault()

    if (!draggedElement) {
      return
    }

    const afterElement = getDragAfterElement(todoList, event.clientY, draggedElement)

    if (!afterElement) {
      todoList.appendChild(draggedElement)
    } else {
      todoList.insertBefore(draggedElement, afterElement)
    }
  })

  function getDragAfterElement(
    container: HTMLDivElement,
    y: number,
    currentDraggedElement: HTMLDivElement,
  ): HTMLDivElement | null {
    const draggableElements = Array.from(container.querySelectorAll('div[draggable="true"]')) as HTMLDivElement[]

    let closestOffset = Number.NEGATIVE_INFINITY
    let closestElement: HTMLDivElement | null = null

    draggableElements.forEach((element) => {
      if (element === currentDraggedElement) {
        return
      }

      const box = element.getBoundingClientRect()
      const offset = y - box.top - box.height / 2

      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset
        closestElement = element
      }
    })

    return closestElement
  }

  const initialCompletedItem = todoList.querySelector('div[draggable="true"]') as HTMLDivElement | null
  if (initialCompletedItem) {
    setItemCompletedState(initialCompletedItem, true)
  }

  updateItemsLeft()
}

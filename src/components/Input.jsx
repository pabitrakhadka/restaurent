import React from 'react'

const Input = () => {
    return (

        <div class="max-w-md mx-auto ">
            <label for="default-search" class="mb-2 text-sm font-medium text-purple-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-purple-900 border border-purple-300 rounded-lg bg-purple-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-purple-700 dark:border-purple-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Message" required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
            </div>
        </div>

    )
}

export default Input
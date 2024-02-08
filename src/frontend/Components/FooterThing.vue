<template>
    <footer class="footer footer-center p-10 text-base-content rounded shrink-0 bg-gray-900">
        <nav class="grid grid-flow-col gap-4">
            <router-link to="/contact" class="link link-hover">Contact</router-link>
            <a class="link link-hover animate-pulse" href="https://smartlink.ausha.co/code-nautilus" target="_blank" rel="noopener noreferrer">Code Nautilus <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
        </nav> 
        <nav>
            <div class="grid grid-flow-col gap-4">
            <a aria-label="twitter" href="https://twitter.com/taisezmoi" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a aria-label="github" href="https://github.com/loreleimoutiez" target="_blank" rel="noopener noreferrer" class="h-6 w-6"><i class="fa-brands fa-github text-2xl h-6 -mt-1"></i></a>
            </div>
        </nav> 
        <aside>
            <p>© {{ currentDate() }} - taisezmoi - Tous droits réservés</p>
        </aside>
    </footer>
</template>

<script setup>
  const currentDate = () => {
    const current = new Date()
    const date = `${current.getFullYear()}`
    return date
  }
</script>
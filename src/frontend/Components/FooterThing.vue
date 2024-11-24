<template>
    <footer class="footer footer-center p-10 text-base-content rounded shrink-0 bg-gray-900">
        <nav class="grid grid-flow-col gap-4">
            <router-link to="/contact" class="link link-hover">Contact</router-link>
            <a class="link link-hover animate-pulse" href="https://smartlink.ausha.co/code-nautilus" target="_blank"
                rel="noopener noreferrer">Code Nautilus <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
        </nav>
        <nav>
            <div class="grid grid-flow-col gap-4">
                <a aria-label="bluesky" href="https://bsky.app/profile/taisezmoi.com" target="_blank"
                    rel="noopener noreferrer" class="h-6 w-6"><i class="fa-brands fa-bluesky text-2xl h-6 -mt-1"></i></a>
                <a aria-label="github" href="https://github.com/loreleimoutiez" target="_blank"
                    rel="noopener noreferrer" class="h-6 w-6"><i class="fa-brands fa-github text-2xl h-6 -mt-1"></i></a>
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
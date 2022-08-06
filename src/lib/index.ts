import type { App, Component } from 'vue'
interface Module {
    default: Component
}
const modulesFiles: Record<string, Module> = import.meta.glob('./*/index.vue', { eager: true })
console.log(modulesFiles);


export default {
    install(app: App) {
        for (const key in modulesFiles) {
            app.component(modulesFiles[key].default.name!, modulesFiles[key].default);
        }
    }
}
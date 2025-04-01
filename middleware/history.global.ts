export default defineNuxtRouteMiddleware((to, from) => {
    const NavigationHistory = useLocalStorage('history', []);
    NavigationHistory.value.push(to.path);
    // console.log(
    //     `Navigation history: ${NavigationHistory.value.join(
    //         '\n'
    //     )}`
    // );
});

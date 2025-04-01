<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Log in to {{ course.title }}</h1>
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded my-5"
      @click="login('github')"
    >
      Log in with Github
    </button>
    <br />
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      @click="login('google')"
    >
      Log in with Google
    </button>
    <br />
    <button
      class="underline font-bold py-2 px-4 rounded my-5"
      @click="() => $router.push('/landing')"
    >
      Go to Home Page
    </button>
  </div>
</template>

<script setup lang="ts">
const course = await useCourse();
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const login = async (provider: any) => {
  const queryParams =
    query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : "";
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: { redirectTo },
  });

  if (error) {
    console.error(error);
  }
};
</script>

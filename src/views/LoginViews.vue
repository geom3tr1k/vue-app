<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { API } from '../config'
import router from '@/router'


const email = ref('')
const password = ref('')

async function submit() {
  const response = await fetch(`${API}/authorization`, {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({ email: email.value, password: password.value })
  })

  const result = await response.json()
  
  if (result.success) {
    localStorage.setItem('auth', result.token)  
    router.push('/')
  }

  console.log(result)
}
</script>

<template>

<div
      class="text-center d-flex justify-content-center align-items-center h-100"
    >
      <main style="max-width: 300px" class="form-signin w-100">
        <form @submit.prevent="submit">
          <img
            src="./static/icon.svg"
            style="width: 70px"
            alt=""
            class="mb-4"
          />
          <h1 class="h3 mb-4">Вход в аккаунт</h1>
          <div class="form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Почта</label>
          </div>
          <div class="form-floating mb-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Пароль</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Войти
          </button>
          <div class="mt-4">
            Нет аккаунта? <RouterLink to="/reg">Зарегистрироваться</RouterLink>
          </div>
          <p class="mt-4 mb-3 text-muted">© 2021-2024</p>
        </form>
      </main>
    </div>

</template>
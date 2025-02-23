<script setup lang="ts">
import { API } from '@/config';
import router from '@/router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const email = ref('')
const password = ref('')
const first_name = ref('')
const last_name = ref('')





async function registr() {

  const result = await fetch(`${API}/registration`, {
    method: 'POST',
    headers: [['Content-Type','application/json']],
    body: JSON.stringify({email: email.value, password: password.value,
                          last_name: last_name.value,
                          first_name: first_name.value
    })
  }).then((response)=>response.json())


  if (!result.success) {
    result.message
    return 
  }
  localStorage.setItem('auth', result.token)
  router.push('/')
  console.log(result) 
}

</script>

<template>

<div class="d-flex h-100 justify-content-center align-items-center px-4">
      <div style="max-width: 600px">
        <main>
          <div class="mb-5 text-center">
            <img
              src="./static/icon.svg"
              style="width: 70px"
              alt=""
              class="mb-4 mx-auto d-block"
            />
            <h2>Регистрация</h2>
          </div>
          <div>
            <form :class="{ 'needs-validation': true }" novalidate @submit.prevent="registr">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    v-model="first_name"
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Фамилия</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    v-model="last_name"
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">Почта</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    v-model="email"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="password" class="form-label">Пароль</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="*******"
                    v-model="password"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your password.
                  </div>
                </div>
                <div>
                  <button class="w-100 btn btn-primary btn-lg" type="submit">
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
        <div class="mt-4">
          Уже есть аккаунт? <RouterLink to="/login>">Войти</RouterLink>
        </div>
        <footer class="my-3 pt-3 text-muted text-center text-small">
          <p>© 2021-2024 File Storage</p>
        </footer>
      </div>
    </div>

</template>
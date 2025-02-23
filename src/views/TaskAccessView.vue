<script setup lang="ts">
import MainMenu from '@/components/MainMenu.vue';
import { API } from '@/config';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const list = ref('')
const route = useRoute();
const router = useRouter();

const {id} = route.params;

const email = ref('')

async function addUser() {
    const token = localStorage.getItem('auth')
    if (token) {
        const response = await fetch(`${API}/tasks/${id}/access`, {
            method:'POST',
            headers: {
				"Authorization": `Bearer ${token}`,
                "Content-type": "application/json",
			},
            body: JSON.stringify({
                email: email.value
            })

        })
            router.push("name: home")
        

}




    

}
</script>

<template>
<div class="d-flex">

<MainMenu />

<div class="p-5 w-100 overflow-y-auto overflow-y-auto">
        <h3 class="mb-4">Права доступа</h3>
        <div>
          <h4 class="mb-3">Предоставить доступ к файлу {{ id }}</h4>
          <form class="needs-validation mb-4" novalidate>
            <div class="row g-3 mb-3">
              <div class="col-sm-6">
                <label for="email" class="form-label">Email пользователя</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="example@user.com"
                  v-model="email"
                  required
                />
                <div class="invalid-feedback">Valid email is required.</div>
              </div>
              <div class="col-sm-6 d-flex align-items-end">
                <button class="btn btn-primary" type="submit" @click="addUser()"
                >Добавить</button>
              </div>
            </div>
          </form>
      </div>
</div>
</div>
</template>
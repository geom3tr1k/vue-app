<script setup lang="ts">
import { ref } from "vue";
import MainMenu from "../components/MainMenu.vue"
import { API } from "@/config";
import { useRouter } from "vue-router";

const title = ref('')
const description = ref('')

const router = useRouter();

async function submit(){
    const token = localStorage.getItem('auth')

    if (token) {
        const response = await fetch(`${API}/tasks`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
				"Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title.value,
                description : description.value
            })

        })

        if (response.ok) {
            router.push("/")
        }
    }
}
</script>

<template>
<div class="d-flex">
    <MainMenu />
<div class="p-5 w-100 overflow-y-auto overflow-y-auto">
        <h3 class="mb-4">Загрузка нового task'a</h3>
        <div class="d-flex flex-column">
          <form class="needs-validation" novalidate @submit.prevent="submit()">
            <div class="row g-3 mb-4 d-flex">
              <div class="col-sm-6">
                <label for="fileName" class="form-label">Заголовок</label>
                <input
                  type="text"
                  class="form-control"
                  id="fileName"
                  placeholder="заголовок"
                  required
                  v-model="title"
                />
              </div>
              <div class="col-sm-6">
                <label for="fileName" class="form-label">Описание</label>
                <input
                  type="text"
                  class="form-control"
                  id="fileName"
                  placeholder="описание"
                  required
                  v-model="description"
                />
              </div>
              <div class="col-sm-6 d-flex align-items-center">
                <button class="btn btn-primary " type="submit">Сохранить</button>
              </div>
            </div>
          </form>
    
        </div>
      </div>
</div>
</template>
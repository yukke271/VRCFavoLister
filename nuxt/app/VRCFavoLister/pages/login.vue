<template>
  <div>
    <h1>Login Page!</h1>
    <NuxtLink to="/"> Top pages </NuxtLink>
    <form @submit="onSubmit">
      <input v-model="email" v-bind="emailAttrs" name="email" type="email" />
      <span>{{ errors.email }}</span>
      <br />
      <input
        v-model="password"
        v-bind="passwordAttrs"
        name="password"
        type="password"
      />
      <span>{{ errors.password }}</span>
      <br />
      <button>Submit</button>
    </form>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).label("8").required(),
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

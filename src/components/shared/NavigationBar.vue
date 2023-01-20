<template>
  <nav
    class="flex items-center w-full justify-end sm:justify-start sm:w-2/4 h-full gap-[30px] text-grey pl-4"
  >
    <router-link to="/">My Tasks</router-link>
    <router-link to="/profile">My Profile</router-link>
    <router-link to="/profile" class="sm:ml-auto">
      <img alt="logo" src="../../assets/icons/avatar.svg" />
    </router-link>
  </nav>
</template>

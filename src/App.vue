<template>

  <div class="container mx-auto p-5 mt-10 font-mono flex justify-end">
    <!-- <div class="mr-5">
      <a href="/sambu_volkin_github_io.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">pdf</a>
    </div> -->
    <div><i18n/></div>
  </div>
  <!-- <div class="basic container mx-auto p-5 mb-10 shadow-xl border rounded-lg font-mono">
    <p class="text-4xl text-center m-10 font-bold">{{ $t('myname') }}</p>
    <PersonalInformation/>
    <Profile/>
    <WorkExperience/>
    <Education/>
    <Skills/>
    <References/>
    <Other/>
  </div> -->

  <div class="midnight container mx-auto mb-10 shadow-xl border rounded-lg font-mono">
    <PersonalInformation/>
    <div class="bg-black grid grid-cols-1 sm:grid-cols-2">
      <div class="sm:col-span-1">
        <WorkExperience/>
      </div>
      <div class="sm:col-span-1">
        <Education/>
        <Skills/>
      </div>
      <!-- <References/>
      <Other/> -->
    </div>
  </div>

</template>

<script setup>
import PersonalInformation from './components/midnight/PersonalInformation.vue'
import WorkExperience from './components/midnight/WorkExperience.vue'
import Education from './components/midnight/Education.vue'
import Skills from './components/midnight/Skills.vue'
import References from './components/midnight/References.vue'
import Other from './components/midnight/Other.vue'

import i18n from './components/midnight/i18n.vue'
</script>

<template>
    <div id="work-experience" class="mb-10">
        <div class="flex items-center border-b border-black py-1 mb-5">
            <div class="title-icon mx-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
            </div>
            <div class="title-text">
                <p class="font-bold text-lg">{{ $t('work_experience.title') }}</p>
            </div>
        </div>

        <div class="content">
            <div class="work-experience-item grid grid-cols-4 items-top mb-5" v-for="item, index in messages.work_experience.work_exp_list" :key="index">
                <div class="work-experience-period mb-5 col-span-4 sm:col-span-1">
                    <p class="text mt-1">{{ $t('work_experience.work_exp_list[' + index + '].period') }}</p>
                    <p class="text-sm">{{ $t('work_experience.work_exp_list[' + index + '].location') }}</p>
                </div>
                <div class="work-experience-description col-span-4 sm:col-span-3">
                    <p class="text-xl font-bold">{{ $t('work_experience.work_exp_list[' + index + '].work_title') }}</p>
                    <p class="text font-bold">{{ $t('work_experience.work_exp_list[' + index + '].work_company') }}</p>
                    <ul class="list-disc list-outside ml-4">
                        <li v-for="item, idx in messages.work_experience.work_exp_list[index].work_descriptions" :key="idx">
                            {{ $t('work_experience.work_exp_list[' + index + '].work_descriptions[' + idx + ']') }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import messages from '@/languages/messages'

export default {
   data(){
       return {
           messages: messages[this.$i18n.locale]
       }
   },
   watch: {
        messages: function () {
            this.messages = this.enabled ? 'ja' : 'en'
        }
   }
}
</script>

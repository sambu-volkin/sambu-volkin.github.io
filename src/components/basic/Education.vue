<template>
    <div id="education" class="mb-10">
        <div class="flex items-center border-b border-black py-1 mb-5">
            <div class="title-icon mx-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
            </div>
            <div class="title-text">
                <p class="font-bold text-lg">{{ $t('education.title') }}</p>
            </div>
        </div>

        <div class="content">
            <div class="education-item grid grid-cols-4 items-top mb-5" v-for="item, index in messages.education.education_list" :key="index">
                <div class="education-period mt-1 col-span-4 sm:col-span-1">
                    <p class="text">{{ $t('education.education_list[' + index + '].period') }}</p>
                    <p class="text-sm">{{ $t('education.education_list[' + index + '].location') }}</p>
                </div>
                <div class="education-description col-span-4 sm:col-span-3">
                    <p class="text-xl font-bold">{{ $t('education.education_list[' + index + '].degree') }}</p>
                    <p class="text font-bold">{{ $t('education.education_list[' + index + '].school') }}</p>
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

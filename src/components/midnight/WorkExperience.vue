<template>
    <div id="work-experience" class="p-5 pb-10 text-white">
        <div class="flex items-center text-yellow-500 mb-3">
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
            <div class="work-experience-item mb-5" v-for="item, index in messages.work_experience.work_exp_list" :key="index">
                <div class="work-experience-period flex">
                    <p class="text flex items-center mr-4">
                        <span class="period-icon inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span class="period-content inline-block">
                            {{ $t('work_experience.work_exp_list[' + index + '].period') }}
                        </span>
                    </p>
                    <p class="text-sm flex items-center">
                        <span class="period-icon inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span class="period-content inline-block">
                            {{ $t('work_experience.work_exp_list[' + index + '].location') }}
                        </span>
                    </p>
                </div>
                <div class="work-experience-description">
                    <p class="text-xl font-bold text-yellow-500">{{ $t('work_experience.work_exp_list[' + index + '].work_title') }}</p>
                    <p class="text font-bold">{{ $t('work_experience.work_exp_list[' + index + '].work_company') }}</p>
                    <ul class="list-disc list-outside ml-4 text-gray-100 text-sm">
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

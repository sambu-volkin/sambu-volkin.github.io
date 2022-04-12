<template>
    <div id="other" class="mb-10">
        <div class="flex items-center border-b border-black py-1 mb-5">
            <div class="title-icon mx-5">

            </div>
            <div class="title-text">
                <p class="font-bold text-lg">{{ $t('other.title') }}</p>
            </div>
        </div>

        <div class="content">
            <ul class="list-disc list-inside">
                <li v-for="item, index in messages.other.list" :key="index">
                    {{ $t('other.list[' + index + '].content') }} [ <a href="https://www.dentsudigital.co.jp/topics/2020/0325-000411/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Link</a> ]
                </li>
            </ul>
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

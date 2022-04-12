<template>
    <div id="personal-information" class="mb-10">
        <div class="flex items-center border-b border-black py-1 mb-10">
            <div class="title-icon mx-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="title-text">
                <p class="font-bold text-lg">{{ $t('personal_information.title') }}</p>
            </div>
        </div>

        <div class="content">
            <div class="grid items-top">
                <!-- <div class="profile-pic mb-5">
                    <img class="rounded-full mx-auto w-40" alt="Profile picture" src="../assets/profile_pic.jpg"/>
                </div> -->
                <div class="profile-description">
                    <div class="description-item grid grid-cols-4">
                        <p class="item-label col-span-2 sm:col-span-1 font-bold mr-2">{{ $t('personal_information.date_of_birth_label') }}:</p>
                        <p class="item-value col-span-2 sm:col-span-3">{{ $t('personal_information.date_of_birth_value') }}</p>
                    </div>
                    <div class="description-item grid grid-cols-4">
                        <p class="item-label col-span-2 sm:col-span-1 font-bold mr-2">{{ $t('personal_information.nationality_label') }}:</p>
                        <p class="item-value col-span-2 sm:col-span-3">{{ $t('personal_information.nationality_value') }}</p>
                    </div>
                    <div class="description-item grid grid-cols-4">
                        <p class="item-label col-span-2 sm:col-span-1 font-bold mr-2">{{ $t('personal_information.address_label') }}:</p>
                        <p class="item-value col-span-2 sm:col-span-3">{{ $t('personal_information.address_value') }}</p>
                    </div>
                    <div class="description-item grid grid-cols-4">
                        <p class="item-label col-span-2 sm:col-span-1 font-bold mr-2">{{ $t('personal_information.phone_number_label') }}:</p>
                        <p class="item-value col-span-2 sm:col-span-3">{{ $t('personal_information.phone_number_value') }}</p>
                    </div>
                    <div class="description-item grid grid-cols-4">
                        <p class="item-label col-span-2 sm:col-span-1 font-bold mr-2">{{ $t('personal_information.email_address_label') }}:</p>
                        <p class="item-value col-span-2 sm:col-span-3">{{ $t('personal_information.email_address_value', { email: 'mongolism@gmail.com' }) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
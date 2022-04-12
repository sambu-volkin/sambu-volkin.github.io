<template>
    <div id="personal-information" class="p-5 border-b-2 border-yellow-500">
        <div class="content">
            <div class="grid items-top">
                <!-- <div class="profile-pic mb-5">
                    <img class="rounded-full w-40" alt="Profile picture" src="../../assets/profile_pic.jpg"/>
                </div> -->
                <div class="profile-description">
                    <p class="text-4xl font-bold">{{ $t('myname') }}</p>

                    <div class="profile-profession">
                        <p class="inline-block text-2xl font-bold text-yellow-500 mb-5">{{ $t('profession_1') }}</p>
                        <p class="inline-block text-2xl font-bold mx-2">/</p>
                        <p class="inline-block text-2xl font-bold mb-5">{{ $t('profession_2') }}</p>
                    </div>

                    <p class="mb-5 text-sm">
                        {{ $t('profile.content') }}
                    </p>

                    <div class="description-item inline-block mr-10">
                        <p class="inline-block text-gray-600 mr-2">{{ $t('personal_information.phone_number_label') }}:</p>
                        <p class="inline-block font-bold">{{ $t('personal_information.phone_number_value') }}</p>
                    </div>
                    <div class="description-item inline-block mr-10">
                        <p class="inline-block text-gray-600 mr-2">{{ $t('personal_information.email_address_label') }}:</p>
                        <p class="inline-block font-bold">{{ $t('personal_information.email_address_value', { email: 'mongolism@gmail.com' }) }}</p>
                    </div>
                    <div class="description-item inline-block">
                        <p class="inline-block text-gray-600 mr-2">{{ $t('personal_information.linkedin_label') }}:</p>
                        <p class="inline-block font-bold">{{ $t('personal_information.linkedin_value') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
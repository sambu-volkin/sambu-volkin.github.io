<template>
    <div id="personal-information" class="mb-10">
        <div class="flex items-center border-b border-black py-1 mb-5">
            <div class="title-icon mx-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="title-text">
                <p class="font-bold text-lg">{{ $t('profile.title') }}</p>
            </div>
        </div>

        <div class="content">
            <p class="mx-3">
                {{ $t('profile.content') }}
            </p>
        </div>
    </div>
</template>
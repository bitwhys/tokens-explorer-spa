<template>
  <div class="flex h-full">
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-zinc-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-4">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="mobileMenuOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="space-y-1 px-2">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      class="group flex items-center rounded p-2 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      <component
                        :is="item.icon"
                        class="mr-4 h-6 w-6 text-zinc-400 group-hover:text-zinc-500"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-zinc-200 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-zinc-700 group-hover:text-zinc-900">{{ user.name }}</p>
                      <p class="text-sm font-medium text-zinc-500 group-hover:text-zinc-700">Account Settings</p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-[72px] flex-col">
        <div class="flex min-h-0 flex-1 flex-col overflow-y-auto border-r bg-white">
          <div class="flex-1">
            <div class="flex items-center justify-center py-4">
              <img class="h-8 w-auto" :src="brandSrc" alt="Your Company" />
            </div>
            <nav aria-label="Sidebar" class="flex flex-col items-center space-y-3 py-12">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="flex items-center rounded p-4 text-zinc-500 hover:bg-indigo-100 hover:text-indigo-600"
              >
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">{{ item.name }}</span>
              </a>
            </nav>
          </div>
          <div class="flex flex-shrink-0 pb-5">
            <a href="#" class="w-full flex-shrink-0 text-zinc-400">
              <svg class="mx-auto block h-9 w-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 3H3V6C4.66 6 6 4.66 6 3ZM14 3H12C12 7.97 7.97 12 3 12V14C9.08 14 14 9.07 14 3ZM10 3H8C8 5.76 5.76 8 3 8V10C6.87 10 10 6.87 10 3ZM10 21H12C12 16.03 16.03 12 21 12V10C14.93 10 10 14.93 10 21ZM18 21H21V18C19.34 18 18 19.34 18 21ZM14 21H16C16 18.24 18.24 16 21 16V14C17.13 14 14 17.13 14 21Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <!-- Mobile top navigation -->
      <div class="lg:hidden">
        <div class="flex items-center justify-between bg-indigo-600 py-2 px-4 sm:px-6 lg:px-8">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
          </div>
          <div>
            <button
              type="button"
              class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <main class="flex flex-1 overflow-hidden">
        <!-- Primary column -->
        <section
          aria-labelledby="primary-heading"
          class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
        >
          <h1 id="primary-heading" class="sr-only">Account</h1>
          <!-- Your content -->
          <div class="flex h-16 items-center justify-between border-b border-zinc-300 bg-white px-6">
            <div class="flex items-center space-x-5">
              <button class="inline-flex h-11 w-11 items-center justify-center rounded bg-zinc-100">
                <svg class="h-8 w-8" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8164 6.66683C8.60807 6.66683 6.60807 7.49183 5.06641 8.8335L2.06641 5.8335V13.3335H9.56641L6.54974 10.3168C7.70807 9.35016 9.18307 8.75016 10.8164 8.75016C13.7664 8.75016 16.2747 10.6752 17.1497 13.3335L19.1247 12.6835C17.9664 9.19183 14.6914 6.66683 10.8164 6.66683Z"
                    fill="#504F54"
                  />
                </svg>
              </button>
              <button class="inline-flex h-12 w-12 items-center justify-center rounded bg-zinc-100">
                <svg class="h-8 w-8" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.7326 8.8335C14.191 7.49183 12.191 6.66683 9.98262 6.66683C6.10762 6.66683 2.83262 9.19183 1.68262 12.6835L3.64928 13.3335C4.52428 10.6752 7.02428 8.75016 9.98262 8.75016C11.6076 8.75016 13.091 9.35016 14.2493 10.3168L11.2326 13.3335H18.7326V5.8335L15.7326 8.8335Z"
                    fill="#B6B4BA"
                  />
                </svg>
              </button>
            </div>
            <div class="ring ring-zinc-100 ring-offset-1">
              <div class="flex items-center bg-zinc-100">
                <span class="inline-block h-8 w-8 bg-indigo-100"></span><span class="inline-block h-8 w-8"></span
                ><span class="inline-block h-8 w-8"></span>
              </div>
            </div>
            <div class="flex items-center space-x-5">
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none"
              >
                Save
              </button>
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
              >
                Export
              </button>
            </div>
          </div>
          <div class="flex w-full flex-1 items-center justify-center">
            <div class="col flex flex h-[832px] w-[1280px] rounded border border-zinc-200 bg-white shadow"></div>
          </div>
          <div class="flex h-20 items-center justify-between border-t border-zinc-300 bg-white px-6"></div>
        </section>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden lg:order-first lg:block lg:flex-shrink-0">
          <div class="relative flex h-full w-96 flex-col overflow-y-auto border-r border-zinc-200 bg-white">
            <!-- Your content -->
            <div class="hidden sm:block">
              <div class="h-16 border-b border-zinc-200">
                <nav class="-mb-px grid h-full grid-flow-col" aria-label="Tabs">
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                  <a
                    href="#"
                    class="border-b-2 border-indigo-500 py-4 px-1 text-center text-sm font-medium uppercase text-indigo-600 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >content</a
                  >

                  <a
                    href="#"
                    class="border-b-2 border-transparent py-4 px-1 text-center text-sm font-medium uppercase text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >system</a
                  >
                </nav>
              </div>
            </div>
            <div class="flex flex-1 flex-col divide-y divide-zinc-200">
              <!--  Search -->
              <div class="flex flex-col space-y-4 px-6 py-4">
                <h2 class="">Search components</h2>
                <div class="relative mt-1 rounded">
                  <input
                    type="text"
                    name="account-number"
                    id="account-number"
                    class="block w-full rounded border-zinc-200 bg-zinc-50 py-2.5 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="search types..."
                  />
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-zinc-400" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col space-y-6 px-6 py-4">
                <div class="flex w-full flex-col space-y-5">
                  <header class="flex items-center justify-between border-b border-zinc-200 pb-4">
                    <h3 class="text-sm text-zinc-600">Title</h3>
                    <ChevronUpIcon class="h-5 w-5 stroke-2 text-zinc-500" />
                  </header>
                  <div class="flex flex-col space-y-3 py-2">
                    <h4 class="text-sm uppercase tracking-widest text-zinc-400">text color</h4>
                    <div class="grid grid-flow-col gap-x-5">
                      <div class="flex flex-col space-y-1.5">
                        <span class="text-sm tracking-widest text-zinc-500">Hex</span>
                        <div class="flex items-center rounded border border-zinc-200">
                          <span class="inline-flex h-12 w-12 items-center justify-center rounded-l bg-black">
                            <span class="block h-8 w-8 rounded-full bg-white"></span>
                          </span>
                          <span
                            class="flex h-full flex-1 items-center justify-center rounded-r bg-zinc-100 px-2 text-sm uppercase text-zinc-500"
                            >#ffffff</span
                          >
                        </div>
                      </div>
                      <div class="flex flex-col space-y-1.5">
                        <span class="grid grid-cols-4 place-items-center text-sm uppercase text-zinc-500">
                          <span>r</span><span>g</span><span>b</span><span>a</span>
                        </span>
                        <div class="grid flex-1 grid-cols-4 divide-x divide-zinc-200 rounded border border-zinc-200">
                          <span class="flex items-center justify-center bg-zinc-100 text-sm text-zinc-500">255</span
                          ><span class="flex items-center justify-center bg-zinc-100 text-sm text-zinc-500">255</span
                          ><span class="flex items-center justify-center bg-zinc-100 text-sm text-zinc-500">255</span
                          ><span class="flex items-center justify-center bg-zinc-100 text-sm text-zinc-500">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-2">
                    <h4 class="text-sm uppercase tracking-widest text-zinc-400">font family</h4>
                    <div class="grid grid-flow-col">
                      <div>
                        <label for="location" class="sr-only">Location</label>
                        <select
                          id="location"
                          name="location"
                          class="mt-1 block w-full rounded border-zinc-200 bg-zinc-50 py-2.5 pr-10 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option selected="">Text</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-[1fr_auto] gap-x-3">
                    <div class="flex flex-1 flex-col space-y-2">
                      <h4 class="text-sm uppercase tracking-widest text-zinc-400">font weight</h4>
                      <div class="grid grid-flow-col">
                        <div>
                          <label for="location" class="sr-only">Location</label>
                          <select
                            id="location"
                            name="location"
                            class="mt-1 block w-full rounded border-zinc-200 bg-zinc-50 py-2.5 pr-10 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option selected="">Bold</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                      <h4 class="text-sm uppercase tracking-widest text-zinc-400">font size</h4>
                      <div class="grid grid-flow-col">
                        <div>
                          <label for="location" class="sr-only">Location</label>
                          <select
                            id="location"
                            name="location"
                            class="mt-1 block w-full rounded border-zinc-200 bg-zinc-50 py-2.5 pr-10 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>18px</option>
                            <option selected="">24px</option>
                            <option>36px</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-flow-col gap-x-3">
                    <div class="flex flex-col space-y-2">
                      <h4 class="text-sm uppercase tracking-widest text-zinc-400">spacing</h4>
                      <div class="grid grid-flow-col">
                        <div class="relative mt-1 rounded">
                          <input
                            type="text"
                            name="account-number"
                            id="account-number"
                            class="block w-full rounded border-zinc-200 bg-zinc-50 py-2.5 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                      <h4 class="text-sm uppercase tracking-widest text-zinc-400">line height</h4>
                      <div class="grid grid-flow-col">
                        <div class="relative mt-1 rounded">
                          <input
                            type="text"
                            name="account-number"
                            id="account-number"
                            class="block w-full rounded border-zinc-200 bg-zinc-50 py-2.5 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-2">
                    <h4 class="text-sm uppercase tracking-widest text-zinc-400">text align</h4>
                    <div class="inline-grid grid-cols-4 place-content-center divide-x divide-zinc-200 rounded border">
                      <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-l bg-zinc-400 py-1.5 px-2 text-sm font-medium text-white text-gray-50 focus:outline-none"
                      >
                        <span class="sr-only">Previous</span>
                        <IconAlignLeft class="h-5 w-auto" />
                      </button>
                      <button
                        type="button"
                        class="relative inline-flex items-center justify-center bg-zinc-100 py-1.5 px-2 text-sm font-medium text-zinc-400 focus:outline-none"
                      >
                        <span class="sr-only">Next</span>
                        <IconAlignCenter class="h-5 w-auto" />
                      </button>
                      <button
                        type="button"
                        class="relative inline-flex items-center justify-center bg-zinc-100 py-1.5 px-2 text-sm font-medium text-zinc-400 focus:outline-none"
                      >
                        <span class="sr-only">Next</span>
                        <IconAlignJustify class="h-5 w-auto" />
                      </button>
                      <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-r bg-zinc-100 py-1.5 px-2 text-sm font-medium text-zinc-400 focus:outline-none"
                      >
                        <span class="sr-only">Next</span>
                        <IconAlignLeft class="h-5 w-auto" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex w-full flex-col space-y-2">
                  <header class="flex items-center justify-between py-2">
                    <h3 class="text-sm text-zinc-600">Media Tools</h3>
                    <ChevronUpIcon class="h-5 w-5 stroke-2 text-zinc-500" />
                  </header>
                  <div class="flex h-12 gap-x-4">
                    <span class="inline-block flex h-full w-12 items-center justify-center rounded bg-zinc-100"></span
                    ><span class="inline-block flex h-full w-12 items-center justify-center rounded bg-zinc-100"></span
                    ><span class="inline-block flex h-full w-12 items-center justify-center rounded bg-zinc-100"></span
                    ><span class="inline-block flex h-full w-12 items-center justify-center rounded bg-zinc-100"></span>
                  </div>
                </div>
                <div class="flex w-full flex-col space-y-2">
                  <header class="flex items-center justify-between py-4">
                    <h3 class="text-sm text-zinc-600">Additional Settings</h3>
                    <ChevronUpIcon class="h-5 w-5 stroke-2 text-zinc-500" />
                  </header>
                  <div class="flex h-12 w-full gap-x-4">
                    <span
                      class="inline-block flex h-full w-12 w-full items-center justify-center rounded bg-zinc-100"
                    ></span
                    ><span
                      class="inline-block flex h-full w-12 w-full items-center justify-center rounded bg-zinc-100"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import brandSrc from '../assets/brand.svg'
import { ChevronUpIcon } from '@heroicons/vue/24/solid'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import IconChat from './icons/IconChat.vue'
import IconPublic from './icons/IconPublic.vue'
import IconContacts from './icons/IconContacts.vue'
import IconHelpCenter from './icons/IconHelpCenter.vue'
import IconInsertChart from './icons/IconInsertChart.vue'
import IconIntegrationInstructions from './icons/IconIntegrationInstructions.vue'
import IconAlignLeft from './icons/IconAlignLeft.vue'
import IconAlignCenter from './icons/IconAlignCenter.vue'
import IconAlignJustify from './icons/IconAlignJustify.vue'

const user = {
  name: 'Emily Selman',
  email: 'emily.selman@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Chat', href: '#', icon: IconChat },
  { name: 'Public', href: '#', icon: IconPublic },
  { name: 'Contacts', href: '#', icon: IconContacts },
  { name: 'Help Center', href: '#', icon: IconHelpCenter },
  { name: 'Analytics', href: '#', icon: IconInsertChart },
  { name: 'Integrations', href: '#', icon: IconIntegrationInstructions },
]

const mobileMenuOpen = ref(false)
</script>

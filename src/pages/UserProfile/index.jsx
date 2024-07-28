import Header from '@/components/Header'
import { HEADER_VIEWS, USER_RESOURCE_VIEWS } from '@/constants'
import { Camera } from 'lucide-react'
import React from 'react'
import StatCard from './components/StatCard'
import ResourcesView from '@/components/ResourcesView'
import useAuth from '@/hooks/useAuth'

export default function UserProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <Header view={HEADER_VIEWS.CreateResource} />
      <div className="mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg">
          <div className="space-y-6">

            <div className="flex items-center justify-between flex-col sm:flex-row text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center space-x-4">
                <div className="group relative w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-500 sm:w-20 sm:h-20">
                  <input
                    type="file"
                    id="profile-image"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <img src="/Folder.png" alt="User Avatar" className="w-full h-full object-cover rounded-full" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full opacity-0 transition-opacity cursor-pointer group-hover:opacity-100">
                    <Camera className='text-white' />
                    <span className="sr-only">Upload Image</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user?.fullname}</h2>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 sm:mt-0"
              >
                Edit profile
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* TODO:convert this section into a component and use throughout page as well as /view-resource page */}
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="fullname"
                    placeholder="Enter your fullname"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                    name="fullname"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="username"
                    defaultValue={user?.username}
                    placeholder="Enter username"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                    name="username"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 ">
                  University/Institution
                </label>
                <div className="mt-2">
                  <div className="relative">
                    <select
                      id="school"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                      name="school"
                      required
                    >
                      <option>Select school</option>
                      <option value="unilag">University of Lagos (UNILAG)</option>
                      <option value="mit">Massachusetts Institute of Technology (MIT)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Department/Major/Field of Study
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="department"
                    placeholder="Enter your deparment"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                    name="department"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 ">
                  Country
                </label>
                <div className="mt-2">
                  <div className="relative">
                    <select
                      id="country"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                      required
                      disabled
                    >
                      {/* TODO: make country feed compulsory on registration  */}
                      <option value="ng">Nigeria</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 mt-10"> Your Stats 📊 </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard name="Uploads" description="Slides, Past Questions, Notes" number={24} />
                <StatCard name="Downloads" description="By other users" number={1234} />
                <StatCard name="Upvotes" description="Slides, Past Questions, Notes" number={789} />
              </div>
            </div>

            <ResourcesView view={USER_RESOURCE_VIEWS.personal} />
          </div>
        </div>
      </div>
    </div>
  )
}


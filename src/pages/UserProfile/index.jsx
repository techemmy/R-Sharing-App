import Header from "@/components/Header";
import { USER_RESOURCE_VIEWS } from "@/constants";
import React from "react";
import ResourcesView from "@/components/ResourcesView";
import useAuth from "@/hooks/useAuth";
import EditProfileForm from "./components/EditProfileForm";
import ProfileImage from "./components/ProfileImage";
import Stats from "./components/Stats";
import { useLoaderData } from "react-router";

export default function UserProfilePage() {
  const { user, updateToken } = useAuth();
  const { schools } = useLoaderData();

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mt-4 sm:mt-0 text-center sm:text-left">
              Account Information
            </h2>
            <div className="flex items-center justify-between flex-col sm:flex-row text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center space-x-4">
                <ProfileImage />
                <div>
                  <h2 className="text-2xl font-bold">{user?.fullname}</h2>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </div>
            </div>

            <EditProfileForm
              user={user}
              schools={schools}
              updateToken={updateToken}
            />

            <Stats />

            <ResourcesView view={USER_RESOURCE_VIEWS.personal} />
          </div>
        </div>
      </div>
    </div>
  );
}

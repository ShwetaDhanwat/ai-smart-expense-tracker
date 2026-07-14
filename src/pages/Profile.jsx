import { User, Mail, Lock } from "lucide-react";

function Profile() {
  const user = {
    name: "Shweta Dhanwat",
    email: "shwetadhanwat@gmail.com",
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

        <div className="flex flex-col items-center">

          <img
            src="https://ui-avatars.com/api/?name=Shweta+Dhanwat&background=2563eb&color=fff&size=200"
            alt="Profile"
            className="w-36 h-36 rounded-full shadow-2xl border-4 border-white"
          />

          <h2 className="text-3xl font-bold mt-5">
            {user.name}
          </h2>

          <p className="text-gray-500 mt-2">
            Expense AI User
          </p>
        </div>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-5 bg-slate-50 p-5 rounded-2xl hover:shadow-md transition">
            <User className="text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Full Name</p>
              <h3 className="font-semibold">{user.name}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
            <Mail className="text-green-600" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="font-semibold">{user.email}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
            <Lock className="text-purple-600" />
            <div>
              <p className="text-gray-500 text-sm">Password</p>
              <h3 className="font-semibold">••••••••••</h3>
            </div>
          </div>

        </div>

        <div className="mt-10 mb-4 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-semibold shadow-lg transition">
  Edit Profile
</button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
import Backendless from "backendless";

const APP_ID = "04920DBA-5E38-40D7-9BE2-20B3A103206C";
const API_KEY = "A5EE79B8-918C-4978-A749-964E76F0B87E";

Backendless.initApp(APP_ID, API_KEY);

Backendless.UserService.getCurrentUser()
  .then(user => console.log("User?", user))
  .catch(err => console.error("Backendless Error!", err));
export const BlogStore = Backendless.Data.of("BlogPost");
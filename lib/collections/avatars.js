var Avatars = new FS.Collection("avatars", {
    stores: [new FS.Store.FileSystem("avatars", {
        path: "./../../server/ressource/avatar"
    })]
});

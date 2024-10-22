export enum URLs {
    DETAIL_PRODUCT_URL_WITHOUT_ID = "http://localhost:3000/product/selectById/",
    PRODUCTS_URL = "http://localhost:3000/product/selectList",
    PRODUCT_IMAGE_WITHOUT_ID_AND_NUMBER = "http://localhost:3000/product/image/full/",
    PRODUCT_IMAGE_MINI_WITHOUT_ID_AND_NUMBER = "http://localhost:3000/product/image/mini/",

    LOGIN_URL = "http://localhost:3000/auth/login",
    REGISTER_URL = "http://localhost:3000/auth/register",
    LOGOUT_URL = "http://localhost:3000/auth/logout",
    UPDATE_TOKEN_URL = "http://localhost:3000/auth/updateToken",

    CHANGENAME_URL = "http://localhost:3000/user/changeName/",
    CHANGEPASSWORD_URL = "http://localhost:3000/user/changePassword/",
    CHANGEABOUT_URL = "http://localhost:3000/user/changeAbout/",
    CHANGEAVATAR_URL = "http://localhost:3000/user/changeAvatar",

    USER_AVATAR_WITHOUT_ID = "http://localhost:3000/user/avatar/full/",
    USER_AVATAR_MINI_WITHOUT_ID = "http://localhost:3000/user/avatar/mini/",
    USER_COMMON_INFO_WITHOUT_ID = "http://localhost:3000/user/getUser/",

    FAVORITES_CREATE = "http://localhost:3000/favorites/create/",
    FAVORITES_LIST = "http://localhost:3000/favorites/list/",
    FAVORITE_CHECK_WITHOUT_ID = "http://localhost:3000/favorites/check/",
    FAVORITES_DELETE_BY_ID_WITHOUT_ID = "http://localhost:3000/favorites/deleteById/",
    FAVORITES_DELETE_ALL = "http://localhost:3000/favorites/deleteAll/",
}

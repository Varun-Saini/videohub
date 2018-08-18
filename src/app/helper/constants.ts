/************************Api base URL******************************/
export const service_baseurl:string = 'http://localhost/angular_api/mytube/api/';
//export const service_baseurl:string = "http://dilliburfi.com/ip/minetube/api/";;

/***********************Auth/Reg URLs*****************************/
export const verifyUserUlr:string = service_baseurl+"user/validate_user";
export const registerUserUrl:string = service_baseurl+"user/register_user";

/***********************Video manage URLs*****************************/
export const allVideoUlr:string = service_baseurl+"video/all_video";
export const addVideoUrl:string = service_baseurl+"video/add_video";
export const oneVideoUrl:string = service_baseurl+"video/one_video";
export const onePublicVideoUrl:string = service_baseurl+"video/one_public_video";
export const updateVideoUrl:string = service_baseurl+"video/update_video";
export const deleteVideoUrl:string = service_baseurl+"video/delete_video";
export const latestVideoUlr:string = service_baseurl+"video/latest_video";
export const validVideoUrl:string = service_baseurl+"video/validate_video";
/*========================================================================*/
export const addVideoViewUlr:string = service_baseurl+"views/add_view";
export const videoViewsUlr:string = service_baseurl+"views/video_views";

export const addVideoLikeUlr:string = service_baseurl+"likes/add_like";
export const videoLikeUlr:string = service_baseurl+"likes/video_likes";


/***********************Video channel URLs*****************************/
export const allChannelUlr:string = service_baseurl+"channel/all_channel";
export const addChannelUrl:string = service_baseurl+"channel/add_channel";
export const oneChannelUrl:string = service_baseurl+"channel/one_channel";
export const updateChannelUrl:string = service_baseurl+"channel/update_channel";
export const deleteChannelUrl:string = service_baseurl+"channel/delete_channel";
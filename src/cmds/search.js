import yts from "yt-search";

//Search for Youtube Video Using YouTube API
const search = async (args) => {
  if (args.length < 1) return [false, "Please Enter What You Want to Play."];

  const searchQuery = args.join(" ");
  const { videos } = await yts(searchQuery);

  if (videos.length < 1)
    return [false, "No Videos Found. Enter Something Else."];

  const video = {
    title: videos[0].title,
    url: videos[0].url,
    image: videos[0].image,
  };

  return [true, video];
};

export default search;

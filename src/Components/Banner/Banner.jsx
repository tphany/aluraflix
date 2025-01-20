import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "./Banner.styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerBackground src="src/Components/Banner/BannerMain.png" alt={video.titulo} />

      <BannerContent>
        <div>
          <BannerTitle category={video.categoria}>
            {video.categoria}
          </BannerTitle>
          <BannerDescription>{video.descripcion}</BannerDescription>
        </div>
        <BannerImg src="src/Components/Banner/player.png" alt={video.titulo} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

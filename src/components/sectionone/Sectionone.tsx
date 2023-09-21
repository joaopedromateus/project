import React from 'react';


function Sectionone() {
  return (
    <section id="banner" className="relative">

      {/* Vídeo */}
      <div id="video">
        <div className="w-full video-local">
          <div
            tabIndex="0"
            className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--pip-supported plyr__poster-enabled plyr--paused"
          >
            <div className="plyr__video-wrapper">
              <video
                crossOrigin=""
                playsInline=""
                id="player-local-banner"
                data-poster="https://www.softplan.com.br/wp-content/uploads/2022/08/Group-4471.png"
                className="absolute top-0 left-0 object-cover w-full h-[600px]"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://www.softplan.com.br/wp-content/uploads/2022/10/softplan-quemsomos.mp4"
                  type="video/mp4"
                />
              </video>
              <div
                className="plyr__poster"
                style={{
                  backgroundImage:
                    'url("https://www.softplan.com.br/wp-content/uploads/2022/08/Group-4471.png")',
                }}
              ></div>
            </div>
            <div className="plyr__captions"></div>
          </div>
        </div>
      </div>

      {/* Div do Texto */}
      <div className="absolute top-0 left-0 w-1/2 h-full p-4 pt-10 pl-8 text-white" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
  <h1 className="w-3/4 text-4xl font-extrabold text-white">
    Uma das maiores <br /> desenvolvedoras de <br /> software do país
  </h1>
  <p className="pt-4 text-base font-bold text-white">
    Somos uma empresa de tecnologia especializada em criar soluções de software que <br /> simplificam e geram mais valor a diversos segmentos importantes para a sociedade.
  </p>
</div>

      
   
    </section>
  );
}

export default Sectionone;

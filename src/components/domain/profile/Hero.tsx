import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="hero-content text-center">
        <div className="max-w-4xl mx-auto">
          {/* 프로필 이미지 */}
          <div className="mb-8 flex justify-center">
            <div className="avatar">
              <div className="w-32 md:w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <Image
                  src="/profile.svg"
                  alt="태윤 프로필 사진"
                  width={160}
                  height={160}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            안녕하세요! 👋<br />
            저는 <span className="text-primary">태윤</span>입니다
          </h1>

          <p className="text-lg md:text-xl mb-8 text-base-content/80 max-w-2xl mx-auto leading-relaxed">
            중학교 2학년 개발 지망생으로, 웹 개발에 열정을 가지고 있습니다.
            <br className="hidden md:block" />
            새로운 기술을 배우고 창의적인 프로젝트를 만드는 것을 좋아해요!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="btn btn-primary btn-lg px-8"
              aria-label="프로젝트 섹션으로 이동"
            >
              🚀 프로젝트 보기
            </a>

            <a
              href="#about"
              className="btn btn-outline btn-lg px-8"
              aria-label="소개 섹션으로 이동"
            >
              📖 더 알아보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
  }
}

interface FacebookEmbedProps {
  width?: number;
  height?: number;
  showPosts?: boolean;
  showEvents?: boolean;
  smallHeader?: boolean;
  hideCover?: boolean;
  adaptContainerWidth?: boolean;
}

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/people/Hotel-Marc/100064515986248/';

export function FacebookEmbed({
  width = 500,
  height = 600,
  showPosts = true,
  showEvents = false,
  smallHeader = false,
  hideCover = false,
  adaptContainerWidth = true,
}: FacebookEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) {
        if (window.FB && containerRef.current) {
          window.FB.XFBML.parse(containerRef.current);
        }
        return;
      }

      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);

      script.onload = () => {
        if (window.FB && containerRef.current) {
          window.FB.XFBML.parse(containerRef.current);
        }
      };
    };

    loadFacebookSDK();
  }, []);

  const tabs = [showPosts && 'timeline', showEvents && 'events'].filter(Boolean).join(',');

  return (
    <div ref={containerRef} className="facebook-embed-container">
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href={FACEBOOK_PAGE_URL}
        data-tabs={tabs}
        data-width={width}
        data-height={height}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptContainerWidth}
        data-hide-cover={hideCover}
        data-show-facepile="true"
      >
        <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
          <a href={FACEBOOK_PAGE_URL}>Hotel Marc</a>
        </blockquote>
      </div>
    </div>
  );
}

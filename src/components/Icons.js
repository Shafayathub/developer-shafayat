import * as React from 'react';

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0">
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2">
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0">
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 496 496"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}>
    <path d="M234.709 430.04c-.856-8.144-1.693-15.837-2.53-23.53l-1.202-.281c-4.328 7.025-8.66 14.048-12.983 21.076-.786 1.276-1.597 2.541-2.302 3.862-1.19 2.23-2.64 3.718-5.52 3.1-2.984-.64-3.269-2.735-3.526-5.216-1.021-9.853-2.186-19.691-3.465-31.02-5.824 9.69-11.023 18.148-16.013 26.728-2.136 3.671-4.532 4.592-8.005 1.873.081-2.568 1.784-4.33 2.944-6.291 5.848-9.894 11.813-19.72 17.695-29.593 1.202-2.018 2.465-3.423 5.18-2.695 2.768.741 4.08 2.124 4.361 5.149.888 9.53 2.102 19.032 3.284 29.375 4.161-4.222 5.983-8.91 8.686-12.98 2.855-4.297 5.458-8.769 8.02-13.25 1.283-2.245 3.03-2.15 5.127-1.717 1.928.397 3.567.971 3.8 3.26 1.398 13.72 2.797 27.441 4.162 41.165.044.444-.267.924-.405 1.363-6.239-.086-6.239-.086-7.308-10.378zM366.087 319.957c.827-.624 1.314-1.126 1.908-1.393 2.112-.95 4.324-3.378 6.46-.25 2.542 3.72-.984 4.348-3.112 5.658-2.441 1.503-4.49 3.447-6.186 5.751-4.283 5.819-3.58 9.84 2.853 14.524.628-6.345 2.9-11.685 8.217-15.276 2.83-1.911 5.936-3.118 9.365-2.975 7.026.294 13.737 5.742 15.377 12.296 1.976 7.893-2.3 15.713-11.264 20.606-1.077 1.008.262 1.81.225 2.705-.157 3.773-2.902 5.272-6.002 3.087-7.214-5.085-14.47-10.134-21.417-15.57-7.697-6.022-8.662-13.345-3.338-21.515 1.826-2.803 3.918-5.39 6.914-7.648m13.654 33.134c1.716.799 3.542.917 5.38.751 4.91-.443 9.299-5.322 9.573-10.58.26-4.977-2.98-9.086-7.886-10.002-4.912-.917-9.627 1.65-11.772 6.409-2.134 4.734-.779 9.134 4.705 13.422zM435.2 203.107c.744 7.814 3.645 14.952 2.28 22.568-1.904 10.635-8.45 16.69-20.02 18.295-8.14 1.13-16.863-3.986-20.811-12.505-3.333-7.19-3.58-15.12-4.98-22.77-.45-2.46 1.164-3.284 3.086-3.626 11.923-2.117 23.859-4.163 35.785-6.263 3.134-.552 4.098 1.356 4.66 4.301m-30.277 7.322c-1.92.828-4.285.303-6.085 1.908.58 5.153 1.038 10.285 3.01 15.075 2.644 6.425 7.935 9.604 14.954 9.266 6.8-.328 11.833-4.384 13.942-10.835 1.991-6.091-.355-11.79-1.27-17.61-.318-2.013-2.08-1.592-3.633-1.316-6.689 1.185-13.392 2.288-20.918 3.512zM81.41 333.52c-3.15-7.165-6.841-13.767-5.076-21.743 2.078-9.384 8.162-14.747 17.127-16.717 8.76-1.926 16.144 1.079 21.495 8.284 4.501 6.06 6.721 13.319 9.797 20.12 1.04 2.302-.357 3.338-2.212 4.16-11.088 4.918-22.188 9.809-33.236 14.815-2.671 1.21-4.015.255-4.977-2.164-.86-2.16-1.834-4.275-2.918-6.755m4.554-4.986 3.023 6.138c5.782-2.52 11.218-4.9 16.662-7.262 12.565-5.453 13.191-7.84 5.006-19.29a18.49 18.49 0 0 0-1.915-2.286c-5.023-5.048-11.78-5.876-18.298-2.275-6.345 3.505-9.216 9.868-7.401 16.786.67 2.555 1.709 5.013 2.923 8.189zM139.566 385.566c-3.229 3.375-6.237 6.473-9.215 9.6-1.523 1.599-2.974 1.865-4.678.187-1.652-1.627-2.473-3.231-.368-5.008 3.168-2.674 6.404-5.268 9.197-8.618-6.522-2.016-10.98-5.164-13.751-10.396-1.663-3.139-2.465-6.495-1.675-10.101 1.82-8.306 9.345-14.659 17.296-14.55 8.348.113 14.72 5.833 16.345 15.064 2.486-1.662 4.614-1.139 6.14 1.267 1.771 2.79-.947 3.849-2.282 5.239-5.523 5.75-11.173 11.378-17.009 17.316m-11.34-27.788c-3.949 6.497-2.924 12.506 2.698 15.828 5.174 3.058 12.167.632 15.12-5.245 2.715-5.403.524-11.466-5.184-14.086-4.784-2.195-8.682-.428-12.635 3.503zM150.251 142.09c-1.963.323-2.99.912-1.595 2.615 1.58 1.928 3.264 3.772 4.856 5.691 3.453 4.162 3.29 4.771-2.3 7.674-6.661-7.669-13.4-15.43-20.143-23.189-1.854-2.134-3.81-4.19-5.54-6.419-1.122-1.445-3.538-2.64-2.021-5.016 1.354-2.12 3.285-3.317 5.669-1.517 1.391-2.536 2.334-4.892 3.816-6.838 4.389-5.765 11.821-8.104 18.215-6.002 7.074 2.325 12.118 9.207 12.14 16.564.022 7.893-4.128 13.204-13.097 16.437m-12.2-23.524c-3.611 5.084-3.708 9.249-.315 13.564 3.274 4.163 7.963 5.637 12.291 3.735 3.913-1.719 6.51-4.486 6.657-9.029.156-4.818-2.094-8.374-6.198-10.51-4.21-2.192-8.331-1.616-12.434 2.24zM381.563 127.557c1.81-1.975 3.43-3.653 4.943-5.42 1.79-2.09 3.392-2.132 5.404-.146 1.952 1.925 1.45 3.343-.193 5.046-5.196 5.387-10.122 11.05-15.518 16.224-11.272 10.813-28.02 5.914-32.07-9.236-1.52-5.685.5-10.686 3.993-14.849 5.34-6.361 11.192-12.29 16.813-18.416 1.666-1.815 3.094-1.248 4.685.195 1.797 1.63 2.241 3.055.365 5.004a820.105 820.105 0 0 0-15.024 16.006c-5.023 5.506-5.539 10.896-1.691 15.599 5.119 6.257 11.25 6.858 17.275 1.338 3.795-3.476 7.2-7.377 11.018-11.345zM308.897 74.803c-1.545 6.714-2.708 13.11-4.428 19.351-3.16 11.468-11.25 16.327-22.196 13.713-11.332-2.707-16.17-10.557-13.773-22.503 1.34-6.68 2.746-13.35 4.269-19.99.48-2.095.428-4.86 4.187-4.079 3.564.74 3.475 2.712 2.8 5.509-1.521 6.3-3.008 12.616-4.202 18.983-1.961 10.45 2.48 16.267 11.943 16.002 5.263-.148 8.594-3.003 10.162-9.25 1.618-6.445 2.828-12.994 4.426-19.446.623-2.513.492-6.244 4.947-5.178 4.208 1.007 2.083 4.097 1.865 6.888zM395.041 170.055c-2.806 6.617-5.466 12.892-8.162 19.153-.1.232-.543.315-1.122.627-3.116-2.542-4.057-5.386-2.263-9.404 2.142-4.799 4.536-9.558 5.703-14.767-7.422-4.165-18.242 2.383-23.85-8.466 7.867-1.406 14.89.331 21.832.931 4.346.376 5.941-1.055 7.305-4.579 2.326-6.01 4.95-11.904 7.603-18.217 3.855 2.837 4.952 5.711 3.137 9.724-2.033 4.492-3.758 9.123-5.887 14.358 5.333.477 9.907 1.155 14.49 1.218 4.323.059 6.888 1.777 7.915 6.416-7.048 1.19-13.854-.716-20.685-.98-3.176-.123-5.147.424-6.016 3.986zM153.284 397.435c-2.755-5.033-2.726-9.792-.718-14.708 1.344-3.292 2.867-4.265 6.34-2.211 5.96 3.524 11.608 7.661 18.115 10.309 2.224-6.991-2.18-12.872-9.989-13.721-1.45-.158-3.055.4-4.318-.711-1.147-1.01-1.208-2.465-.769-3.697.779-2.183 2.849-1.982 4.659-1.958 8.405.11 16.363 6.839 18.028 15.193 1.395 6.998-2.998 15.218-9.837 18.405-7.634 3.558-15.503 1.128-21.511-6.901m4.868-9.982c-1.314 5.054.573 9.234 5.128 11.357 4.204 1.96 7.97 1.006 10.797-2.964-4.98-3.194-9.813-6.577-15.925-8.393zM321.22 393.132c2.876-1.654 5.922-2.343 7.888-4.784-4.754-5.578-12.795-4.962-17.288 1.46-1.57 2.246-2.875 4.482-5.737 2.189-2.74-2.195-.376-4.24.852-5.977 4.583-6.486 14.066-9.418 21.358-6.781 7.111 2.572 11.642 10.119 11.007 18.334-.543 7.026-6.699 13.267-14.39 14.59-6.34 1.09-13.733-2.82-16.694-8.621-1.304-2.554-.64-3.975 1.85-5.086 3.648-1.628 7.22-3.428 11.153-5.324m-5.213 8.703c2.199 3.864 6.384 5.218 10.788 3.488 4.638-1.82 6.51-5.812 5.071-11.7-5.229 2.612-10.348 5.17-15.86 8.212zM181.923 121.352c-9.447 2.255-17.037-1.685-20.43-10.31-3.235-8.218-.433-16.234 7.185-20.56 7.463-4.236 15.766-2.691 21.017 3.91 3.402 4.276 3.207 5.318-1.56 7.81-5.862 3.063-11.74 6.095-17.65 9.16 3.56 5.614 10.776 5.662 15.939.56a13.36 13.36 0 0 0 2.364-3.18c1.074-2.015 2.453-1.8 4.165-.983 2.04.974 1.996 2.456 1.154 4.14-2.47 4.941-6.705 7.69-12.184 9.453m-11.685-24.716c-2.187 1.726-3.465 4.042-3.705 6.745-.157 1.756.5 3.658 2.862 2.554 4.852-2.267 9.789-4.445 14.166-7.696-3.79-4.71-6.853-5.12-13.323-1.603zM97.055 261.275c1.567-2.905 3.307-3.474 5.706-1.349 5.557 4.924 6.615 16.782 2.025 23.61-4.33 6.443-14.638 8.928-22.015 5.308-6.91-3.39-10.584-12.394-8.254-20.035 1.775-5.822 5.906-9.112 11.497-10.76 3.008-.886 4.98-.338 5.427 3.535.792 6.87 2.133 13.675 3.253 20.567 6.884-2.107 8.954-9.795 4.893-16.402-.854-1.39-2.546-2.247-2.532-4.474m-11.63 21.756c1.222.5 2.449 1.1 3.765-.294-.752-5.83-1.074-11.836-2.955-17.705-7.945 4.011-8.389 11.934-.81 17.999zM104.456 218.73c-8.207 3.815-15.646 2.872-21.106-2.422-4.99-4.839-6.368-12.281-3.505-18.925 2.941-6.827 10.315-10.742 17.53-9.513 3.565.608 4.841 2.17 3.698 5.813-2.075 6.615-3.9 13.308-5.855 20.062 6.428.633 11.136-3.898 11.435-10.496.067-1.479.008-3.042-.404-4.445-.636-2.165-.206-3.56 2.002-4.293 2.58-.855 3.212 1.058 3.836 2.776 2.548 7.014-.457 15.656-7.63 21.443m-13.645-8.823c1.407-5.008 3.394-9.875 4.01-15.353-4.672-.567-7.538 1.42-9.401 5.135-1.89 3.767-1.493 7.404 1.154 10.633 1.066 1.3 2.538 3.218 4.237-.415zM410.619 259.145c.138-3.99-1.429-4.481-4.263-2.778-4.464 2.683-6.338 9.433-3.97 15.081.884 2.11 2.01 4.086-.776 5.466-2.903 1.438-3.946-.918-4.758-2.852-2.931-6.979-2.31-13.775 2.329-19.75 3.958-5.098 9.479-7.065 15.93-5.925 6.995 1.236 11.859 4.977 13.735 12.046 2.843 10.713-5.167 21.15-15.863 20.917-3.22-.07-4.612-1.297-4.258-4.497a2463.23 2463.23 0 0 0 1.894-17.708m8.803 13.76c6.285-6.456 5.22-13.662-2.69-16.878-2.356 4.563-1.05 9.699-2.212 14.45-.913 3.732.818 5.01 4.902 2.429zM102.516 163.098c-3.153-8.638-.649-15.459 5.812-20.857 5.579-4.661 11.885-4.771 18.224-1.505 6.224 3.206 9.43 8.614 9.173 15.432-.269 7.162-3.976 12.66-10.623 15.699-6.178 2.823-12.021 1.78-17.34-2.331-2.13-1.647-3.865-3.66-5.246-6.438m14.552 3.466c7.105.132 11.757-3.427 12.426-9.508.538-4.878-4.37-10.73-9.765-11.643-5.667-.959-10.753 2.684-12.094 8.66-1.101 4.91 1.997 9.304 9.433 12.491zM357.586 363.393c-1.708-2.07-3.208-3.848-4.664-5.663-1.262-1.574-1.177-2.94.56-4.214 1.612-1.182 3.075-2.07 4.712-.098 6.348 7.644 12.71 15.277 19.045 22.888-1.776 3.126-3.805 4.576-6.755 3.155-1.33 2.32-2.272 4.49-3.67 6.311-6.287 8.2-15.213 8.602-22.106.977-3.454-3.82-6.648-7.873-9.981-11.802-1.634-1.926-2.848-3.696-.13-5.837 2.538-2 3.854-.394 5.303 1.352 2.972 3.58 5.9 7.202 8.97 10.697 3.8 4.325 7.81 4.923 11.794 1.943 4.389-3.282 5.345-7.985 2.326-12.734-1.507-2.372-3.437-4.476-5.404-6.975zM399.54 309.053c-7.255-.205-10.922-3.78-10.795-10.47.11-5.832 2.27-11.028 5.864-15.592 1.222-1.552 2.497-3.367 4.874-1.395 2.062 1.712 1.639 3.234.101 5.062-1.938 2.305-3.379 4.951-4.137 7.894-.651 2.53-2.006 5.54 1.427 6.919 3.17 1.273 4.257-1.673 5.493-3.784 1.008-1.72 1.828-3.55 2.82-5.28 2.904-5.064 6.904-6.922 11.536-5.422 3.929 1.272 6.862 5.896 6.41 10.816-.446 4.872-2.162 9.38-5.14 13.328-1.181 1.568-2.511 2.838-4.512 1.076-1.607-1.415-2.037-2.892-.485-4.715 2.094-2.458 3.42-5.316 3.687-8.567.165-2.007.326-4.216-1.983-5.164-2.482-1.02-3.64 1.01-4.706 2.648-1.356 2.086-2.487 4.32-3.713 6.49-1.505 2.666-3.375 4.948-6.742 6.156zM100.408 245.498c-9.401 3.391-18.432 6.654-27.557 9.951-2.179-4.542-.775-6.713 3.166-8.054 6.886-2.344 13.695-4.915 21.522-7.747-7.224-3.829-13.461-7.287-19.842-10.457-3.347-1.662-4.948-3.756-3.49-7.536 2.05-.95 3.507.572 5.02 1.33 7.446 3.73 14.834 7.576 22.218 11.427 2.297 1.198 4.939 1.949 4.831 5.544-.114 3.814-2.79 4.51-5.868 5.542zM320.776 123.903c-3.03 2.933-5.455 2.59-7.621-.43.252-2.04 1.939-2.749 3.166-3.773 13.14-10.971 26.339-21.872 39.46-32.867 2.949-2.471 5.569-3.633 8.511.941-14.438 11.986-28.838 23.94-43.516 36.129zM317.695 91.786c1.99-4.435 3.942-8.475 5.677-12.607 1.072-2.55 2.318-3.785 5.252-2.426 2.743 1.27 2.532 2.874 1.477 5.185-4.896 10.723-9.693 21.491-14.494 32.257-1.019 2.285-1.944 4.202-5.122 2.713-3.04-1.425-2.51-3.299-1.434-5.658 2.894-6.344 5.684-12.736 8.644-19.464zM104.07 183.054c-9.182-4.378-18.02-8.602-26.735-12.768 1.134-6.287 1.96-6.77 7.045-4.323 10.951 5.269 21.87 10.607 32.833 15.85 2.348 1.123 4.06 2.187 2.514 5.24-1.512 2.983-3.405 1.807-5.39.868-3.31-1.567-6.615-3.142-10.267-4.867zM205.841 76.585c1.63-.88 2.914-1.685 4.627-1.37 2.093 2.766 2.67 5.104-1.294 7.005-5.157 2.473-5.628 7.016-4.446 11.898.973 4.02 2.29 7.958 3.437 11.937.635 2.205.975 4.236-2.05 5.057-2.757.747-3.834-.397-4.54-2.978-2.184-7.991-4.638-15.909-6.883-23.885-.447-1.588-1.758-3.538.8-4.715 2.126-.977 4.17-1.589 5.325 1.45 1.78-1.59 3.246-2.9 5.024-4.399zM299.833 420.84c-1.166-.919-1.725-2.784-3.257-.786-1.351 1.762-3.275 2.802-5.234 3.735-1.689.805-3.231.907-4.083-1.215-.674-1.681-.953-3.457 1.03-4.285 7.887-3.297 7.173-9.382 5.366-15.895-.889-3.201-1.72-6.418-2.617-9.617-.693-2.472.31-3.655 2.713-4.308 2.491-.677 3.308.569 3.852 2.58 2.297 8.492 4.553 16.996 6.96 25.457 1.233 4.334-1.738 4.17-4.73 4.335zM382.98 315.907c-2.085-2.31-.706-4.008.544-5.502 1.286-1.536 2.737-.36 4.04.26 7.486 3.559 14.95 7.164 22.445 10.703 2.351 1.11 3.991 2.3 2.443 5.293-1.52 2.94-3.394 1.766-5.381.816-7.927-3.788-15.861-7.56-24.092-11.57zM262.215 401.264c-2.09 2.312-4.258 2.664-6.445 1.065-1.596-1.166-2.202-2.908-1.41-4.869.947-2.347 2.808-3.425 5.183-2.714 3.062.916 4.18 3.069 2.672 6.518zM236.4 100.682c-.077-3.412 1.468-4.963 4.476-4.993 2.362-.024 3.67 1.39 4.117 3.53.472 2.257-.627 3.992-2.674 4.725-2.749.984-4.847.028-5.92-3.262zM424.818 332.395c-1.83 2.592-3.847 3.165-6.094 1.34-1.52-1.237-2.204-2.909-1.221-4.848 1.007-1.989 2.66-3.081 4.852-2.406 2.725.84 3.266 2.989 2.463 5.914z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

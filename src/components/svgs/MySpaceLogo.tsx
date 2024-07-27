interface SVGProps{
    width?: number,
    height?: number,
    clases?: string
}

const MySpaceLogo = ({width, height, clases}: SVGProps) => (
    <svg
    className={clases}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    xmlSpace="preserve"
    width={width}
    height={height}
    >
      
      <path d="m330.9 894.1-1 74.7H0v-74.7c0-90.5 76.2-163 166.8-163 90.5 0 165.3 72.5 164 163zm-14.2-339.7c0 83-67 150.2-150 150.2S16.3 637.4 16.3 554.4c0-83 67.6-150.2 150.6-150.2s149.9 67.2 149.9 150.2zm423.4 328.3-1 86.1H358.4v-86.1c0-104.4 88-188 192.3-188 104.4 0 190.6 83.6 189.3 188zm-16.4-391.8a173 173 0 0 1-172.9 173.3 173.5 173.5 0 0 1-173.6-173.3c0-95.7 78-173.2 173.6-173.2a173 173 0 0 1 173 173.2zM1200 871.3l-1.2 97.5H767.7v-97.5c0-118.3 99.6-213 217.9-213 118.2 0 216 94.7 214.4 213zm-18.6-443.9a196 196 0 0 1-195.8 196.3 196.6 196.6 0 0 1-196.7-196.3 196.6 196.6 0 0 1 196.7-196.2 196 196 0 0 1 195.8 196.2z" />
    </svg>
  )
  export default MySpaceLogo
  
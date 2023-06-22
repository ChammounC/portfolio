import classNames from 'classnames'
import { useId } from 'hooks'
import './index.css'

function Monogram({ highlight, className, ...props }) {
    const id = useId()
    const clipId = `monogram-clip-${id}`

    return (
        <svg
            aria-hidden
            className={classNames('monogram', className)}
            width="80"
            height="80"
            viewBox="0 80 500 500"
            {...props}
        >
            <defs>
                <clipPath id={clipId}>
                    <path
                        d="M2640 4113c-405-40-805-240-1102-552-536-561-638-1344-242-1861 57-75 186-198 259-247 208-140 434-206 705-206 281 0 540 70 795 215 124 70 257 167 251 183-2 7-75 99-161 203l-157 190-67-45c-244-164-543-220-792-147-223 66-398 242-471 474-20 65-23 94-22 220 1 155 19 239 79 376 92 208 295 413 520 526 318 161 692 133 913-67l62-57 58 48c164 139 401 345 406 353 7 11-78 97-154 156-238 182-563 270-880 238zM4010 3364c0-22 2-25 15-14 12 10 13 16 4 26-16 20-19 18-19-12z"
                        transform="matrix(.1 0 0 -.1 0 500)"
                    />
                </clipPath>
            </defs>
            <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
            {highlight && (
                <g clipPath={`url(#${clipId})`}>
                    <rect className="monogram__highlight" width="100%" height="100%" />
                </g>
            )}
        </svg>
    )
}

export default Monogram

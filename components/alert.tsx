import Container from './container'
import cn from 'classnames'
import '../pages/dev'
import Link from 'next/link'

export default function Alert({preview}) {
	return (
		<div
			className={cn('border-b', {
				'bg-black text-white': preview,
				'bg-black border-accent-2': !preview,
			})}
		>
			<Container>
				<div className="py-2 text-center text-white text-sm">
					{preview ? (
						<>
							Bu Blog geliştirme aşamasında.{' '}
							<Link href="/api/exit-preview"
										className="underline hover:text-cyan duration-200 transition-colors">
								Bu blog aktif geliştirme aşamasında
							</Link>
							{' '}
							Detaylı Bilgi İçin..

						</>
					) : (
						<>
							Bu blog aktif geliştirme aşamasında{' '}
							<Link href="/dev"
										className="underline hover:text-success duration-200 transition-colors"
							>
								Detaylı Bilgi İçin..
							</Link>
							.
						</>
					)}
				</div>
			</Container>
		</div>
	)
}
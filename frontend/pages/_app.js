import '../styles/globals.css'
import Layout from '../components/Layout'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<GoogleAnalytics trackPageViews gaMeasurementId="G-32CBED8Z0C" />
			<Component {...pageProps} />
		</>
	)
}

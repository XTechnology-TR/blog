import styles from "./post-body.module.css";

export default function PostBody({ content }) {
	return (
		<div className="card-content blog">
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}

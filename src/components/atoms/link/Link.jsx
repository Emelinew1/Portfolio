
const Link = ({url, content}) => {
  const isExternalLink = url.startsWith('https');

  return (
    isExternalLink
    ?
    <a href={url} rel="noopener noreferrer" target="_blank">
      {content}
    </a>
    :
    <a href={url}>{content}</a>
  )
}

export default Link
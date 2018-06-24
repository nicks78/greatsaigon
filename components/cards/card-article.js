//greatsaigon/components/Cards/card-article.js
import Link from 'next/link'
import {DEFAULT_IMG} from '../../api/constant'

const CardArticle = (props) => {

    const {article, index } = props;

    return (<article className="uk-comment uk-comment-primary">
                <header className="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div className="uk-width-auto">
                        <img className="uk-comment-avatar" src={ article.image|| DEFAULT_IMG } width="80" height="80" alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{ article.title }</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="#">{article.published_date}</a></li>
                        </ul>
                    </div>
                </header>
                <div className="uk-comment-body">
                    <p>{article.content}...</p>
                </div>
                <hr />
                <Link  prefetch href={`/profile-article/?slug=${article.slug}?id=${article.id}`} 
                        as={`/profile-article/${article.slug}/${article.id}`}><a className="uk-button uk-button-text">View more</a>
                </Link>
                <style jsx global>{`
              .uk-comment-primary {
                box-shadow: 1px 2px 5px gray;
              }
        `}</style>
            </article>
    )
}

export default CardArticle;
//greatsaigon/components/Cards/card-article.js

const CardArticle = (props) => {

    const {article, index } = props

    var toggle = index % 2 == 0 ; // Toggle between classes 
    return (<article className="uk-comment uk-comment-primary">
                <header className="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div className="uk-width-auto">
                        <img className="uk-comment-avatar" src={ article.image.medium } width="80" height="80" alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{ article.name }</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="#">{article.premiered}</a></li>
                            <li><a href="#">{article.schedule.time}</a></li>
                        </ul>
                    </div>
                </header>
                <div className="uk-comment-body">
                    <p>{article.summary.slice(0, 120)}...</p>
                </div>
                <hr />
                <button className="uk-button uk-button-text">View more</button>
            </article>
    )
}

export default CardArticle;
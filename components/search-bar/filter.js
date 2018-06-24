// component/search-bar

const Filter = () => {

    return (
        <div className="wrapper-filter">
            <div className="uk-inline">
                <button className="filter" type="button">CLICKME 1</button>
                <div data-uk-dropdown="mode: click">
                    <input type="checkbox" className="uk-checkbox"/>&nbsp;<label>Checkme</label>
                </div>
            </div>
            <div className="uk-inline">
                <button className="filter" type="button">CLICKME 2</button>
                <div data-uk-dropdown="mode: click">
                    <input type="checkbox" className="uk-checkbox"/>&nbsp;<label>Checkme</label>
                </div>
            </div>

        <style jsx global>{`
            .wrapper-filter {
                margin-left: 2em;
            }
            .filter {
                font-size: 15px !important;
                line-height: 18px !important;
                letter-spacing: 0.2px !important;
                padding-top: 6px !important;
                padding-bottom: 6px !important;
                color: #484848 !important;
                background: white;
                border: 1px solid #dce0e0 !important;
                border-radius: 4px !important;
                cursor: pointer !important;
                display: inline-block !important;
                padding-left: 12px !important;
                padding-right: 12px !important;
                position: relative !important;
                text-align: center !important;
                text-decoration: none !important;
                width: auto !important;
                margin-right: 1em;
            }

        `}</style> 
        </div>
    )
}

export default Filter;
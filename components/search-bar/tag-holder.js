//greatsaigon/components/search-bar/tag-holder.js
import locales from '../../locales/en.json'


const TagHolder = (props)  => {

    const { where_tag, what_tag, removeTag, directory_tag } = props


    return (

              <div style={{ borderRadius: '24px', minHeight: '50px', width: '100%', marginBottom: '2px', backgroundColor: 'transparent' }}>
                <p className="tag" style={{ marginTop: '0px' }}>
                { directory_tag !== '1' && directory_tag !== '' ? <span style={{ textTransform: 'capitalize' }}>{directory_tag}&nbsp;&nbsp;*</span> : null }
                {
                  where_tag.map((x, index) => {
                    return <span onClick={ () => { removeTag(x, 'where_tag') } } key={index}>{x}&nbsp;<i>&#9747;</i></span> 
                  })
                }
                {
                  what_tag.map((x, index) => {
                    return <span onClick={ () => { removeTag(x, 'what_tag') } } key={index}>{x}&nbsp;<i>&#9747;</i></span> 
                  })
                }
   
                </p>

                <style jsx global>{`

              .tag {
                text-align: justify;
                padding: 5px 0px 0px 5px;
                margin-bottom: 0px;
              }
              .tag span {
                margin: 3px;
                padding: 5px 10px 5px 10px;
                background-color: #f6a406;
                border-radius: 5px;
                display: inline-block;
                text-align: center;
                color: #333;
                outline: none;
                font-size: 12px;
                line-height: 1.5;
              }
              .tag span i {
                padding: 0px 2px 0px 2px;
                color: white;
                margin: 2px;
              }
              .tag span i:hover {
                cursor: pointer;
                color: red;
              }
    


            `}</style>
              </div>
    )

}

export default TagHolder;
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getScriptData } from '../../store/scriptsContent';

import { AboutContent, HighlightedItem } from '../../common/components/Contents';
import { getQueryParams } from '../../common/utils/routerHelpers';

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import CodeBlock from './components/CodeHighlight';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { quotes } from '../../common/constants/quotes';

function ScriptArticle(){
    const [quote, setQuote] = useState({});
    const dispatch = useDispatch();
    const content = useSelector((state) => state.scriptsContent.current_script);
    const scriptTitle = content.name?.split("_").join(" ");

    const decodedTextContent = content.script ? atob(content.script.data_text.content).split("\n").join("<br>") : '';
    const decodedCodeContent = content.script ? atob(content.script.data_code.content) : '';
    
    useEffect(() => {
        const { project_name, script_name }= getQueryParams();
        const [ projectName, scriptName] = [ project_name, script_name ];

        dispatch(getScriptData({projectName, scriptName}));

        Prism.highlightAll();

        setQuote(quotes[Math.floor(Math.random()*quotes.length)])
      }, []);

    return (
        <div className='mb-4 mb-lg-5'>

        {
            (!content || !content.script) ?
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton width={'100%'} className="my-4 my-lg-5" height={"45px"}/>
                    <Skeleton width={'100%'} count={5} className="my-2" />
                    <div className="my-3 my-lg-4 ">
                        <Skeleton width={'100%'} className="my-2" count={3} height="30px" />
                    </div>
                    <Skeleton width={'100%'} count={5} className="my-2" />
                    <div className="py-2"></div>
                </SkeletonTheme>
            :
            ''
        }

            <div className='my-4 my-lg-5'>
                <HighlightedItem noHover fontSize={'1.8rem'} className="text-capitalize">
                    {scriptTitle}         
                </HighlightedItem>

            </div>

            <AboutContent
                hasUnlimitedLines={true}
                dangerouslySetInnerHTML={{__html: decodedTextContent}}
            />

            <div className="my-4 my-lg-5">
                <CodeBlock
                    code={decodedCodeContent}
                    language={content?.script?.script_language}>
                </CodeBlock>
            </div>

            <AboutContent hasUnlimitedLines={true}>
                <div style={{verticalAlign: "middle"}}>
                    <hr className='my-5' />

                    <span style={{ verticalAlign: "middle"}}>
                        This content was auto-generated by the github repository
                    </span>

                    <a
                        href={`https://github.com/PedroAraripe/${content.repositoryName}`} 
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration: 'none', color: "var(--theme-red)"}}
                    >
                        <HighlightedItem style={{ verticalAlign: "middle"}} themeReverse fontSize="1.2rem" className='text-capitalize'>
                            {" "}{content.repositoryName?.split("-").join(" ")}{" "}
                        </HighlightedItem>
                    </a>

                    <span  style={{ verticalAlign: "middle"}}>
                        .
                    </span>
                    
                    
                    <div className='my-4'>
                        Good lucky on your study journey!
                    </div>

                    <div className='mb-5 font-monospace'>
                        "{quote.text}" - {quote.author}
                    </div>
                </div>
            </AboutContent>
        </div>
        
    )
}

export default ScriptArticle;
function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <a href="mailto:lhw1847@gmail.com">lhw1847@gmail.com</a>
            </div>
            <div>
                <h4>Kakao</h4>
                <a href="#">LeeHyunwoo</a>
            </div>
            <div>
                <h4>soail</h4>
                <ul>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Instargram</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Cafe</a></li>
                    <li><a href="#">Reference</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">CSS</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
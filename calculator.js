document.write("Hello JS");
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e)
        {
            let value=e.target.dataset.num;
            window.print(value);
            screen.value+=value;
        })
    });

    equal.addEventListener('click',function(e)
    {
            let answer=eval(screen.value);
            screen.value=answer;
    })

    clear.addEventListener('click',function(e)
    {
        screen.value="";
    })
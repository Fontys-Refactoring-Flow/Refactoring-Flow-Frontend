import React from 'react'
import './../style/Home.css'
import './../style/Main.css'

const HomePage = () => {
  return (
    <div className="container">
        <p className='title'>Refactoring code</p>
        <p className='title2'>What is Refactoring?</p>
        <p className='text'>In computer programming and software design, code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. Refactoring is intended to improve the design, structure, and/or implementation of the software (its non-functional attributes), while preserving its functionality. Potential advantages of refactoring may include improved code readability and reduced complexity; these can improve the source code's maintainability and create a simpler, cleaner, or more expressive internal architecture or object model to improve extensibility. Another potential goal for refactoring is improved performance; software engineers face an ongoing challenge to write programs that perform faster or use less memory.</p>
        <blockquote class="otro-blockquote">
          Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”
          <span>― Martin Fowler</span>
        </blockquote>
        <p className='title2'>Benefits</p>
        <p className='text'>
	        There are two general categories of benefits to the activity of refactoring.
        </p>
        <p className='text'>
	        - Maintainability. It is easier to fix bugs because the source code is easy to read and the intent of its author is easy to grasp. This might be achieved by reducing large monolithic routines into a set of individually concise, well-named, single-purpose methods. It might be achieved by moving a method to a more appropriate class, or by removing misleading comments.<br/>
	        - Extensibility. It is easier to extend the capabilities of the application if it uses recognizable design patterns, and it provides some flexibility where none before may have existed.
        </p>
        <p className= 'text'>
	        Performance engineering can remove inefficiencies in programs, known as software bloat, arising from traditional software-development strategies that aim to minimize an application's development time rather than the time it takes to run. Performance engineering can also tailor software to the hardware on which it runs, for example, to take advantage of parallel processors and vector units.
        </p>
        <p className='title2'>Our application</p>
        <p className='text-last'>Placeholder text</p>
    </div>
  )
}

export default HomePage

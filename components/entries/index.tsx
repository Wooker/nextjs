import { Entry } from './entry'

function Entries({ entries }) {
  if (entries) {
    return (
		<>
		<div className="album py-5 bg-light">
			<div className="container">
			  	<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
					{entries.map((e) => (
						<Entry key='e.node.sku' sku={e.node.sku} title={e.node.name} image={e.node.image.guid} />
					))}
				</div>
			</div>
		</div>
		</>
    )
  } else {
    return null
  }
}

export default Entries

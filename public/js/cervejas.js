            <% cervejas.forEach(function(cervejas) { %>
                <div class="vitrine-destaque">
                    <img src=<%= cervejas[i].img %> alt=<%= cervejas[i].fabricante %> class="cerveja-img">
                    <h2><%= cervejas[i].name %></h2>
                    <p>Fabricante: <%= cervejas[i].fabricante %></p>
                    <p>Tipo: <%= cervejas[i].tipo %></p>
                    <span class="preco">R$ <%= cervejas[i].preco %></span>
                    <div class="btnContainer">
                        <span class="addToCart">Adicionar</span>
                    </div>
                </div>
            <% }) %>
---
template: post
title: Maximising Blockchain Collectible Economies
slug: maximising-blockchain-collectible-economies
draft: false
date: 2019-06-14T14:51:59.524Z
description: >-
  What is the optimal size for a blockchain collectible (NFT) economy? How many
  unique items should be in a collection? How does one maximise the value of
  this economy?


  These are very interesting questions, because there's a trade-off between
  scarcity of a collectible economy & its inclusivity (allowing users to
  participate through ownership of a collectible). Currently, many projects in
  the space simply thumb-suck the size of their economies or employ unproven
  generation of new collectibles. The projects either generated too much or too
  little.
category: IDEAS
tags:
  - blockchain
  - economis
  - tokens
  - collectibles
---
What is the optimal size for a blockchain collectible (NFT) economy? How many unique items should be in a collection? How many [CryptoKitties](https://www.cryptokitties.co/) should there be? How many [CryptoPunks](https://www.larvalabs.com/cryptopunks)? How does one maximise the value of this economy?

These are very interesting questions, because there's a trade-off between scarcity of a collectible economy & its inclusivity (allowing users to participate through ownership of a collectible). Currently, projects in the space simply thumb-suck the size of their economies or employ unproven generation of new collectibles. The projects generated too many or too little. It's uncertain.

The value of a collection is contingent on generating a willing economy of potential buyers.

Too scarce and it limits participation -> reducing the value of collection/collection.

Too abundant and it confuses the collectors -> reducing the value of collecting/collection. 

To put it differently: for a collectible economy, on the extremes having only one unique item is poor (imagine only 1 CryptoKitty) & having a 100 billion billion unique collectible items is also poor.

Somewhere in the middle lies an optimal size for each collectible economy. The optimal economy likely follows a pattern akin to a bell curve.

![](/media/1_hpzu1krhwuezh1052uxuxw.gif)

Y: Maximum value of the collectible economy. X: Amount of collectibles in circulation.

From zero, for every additional collectible in a collection, it adds non zero-sum value to the collection (1+1 = 3). This is primarily because restricted availability of supply does not necessarily capture available demand. Each new collectible generates more interest in the overall collection (it's not zero sum).

However: Growing this economy with each new collectible introduces new mental transaction costs. By having more collectibles, it reduces the overall scarcity of the economy, and reduces the ability for users to reasonably discern between them.

Thus: the marginal value of adding an extra collectible diminishes in a collection until it becomes more negative than positive. At some point, you can have too many collectibles in a collection. This is the latter end of the bell curve.

Such an economy will depend on the interest in the collection itself. For example, if Harry Potter had a blockchain collectible economy, it would definitely be able to capture many more unique items and collectors vs the collectible economy of a smaller media franchise.

That still leaves us with a question: how does one choose such an economy size? I have a proposal: let the market decide.

**Automating Collectible Economies With Bonding Curves**

[Bonding Curves](https://blog.simondlr.com/curved-token-bonding-in-curation-markets) is a class automated market makers that I designed that increases and decreases the supply of a fungible token based on demand. This can also be employed for non-fungible tokens (or collectibles).

The available supply of collectibles in a collection would grow and shrink based on demand. At any point in time, a new collectible can be brought into circulation at a hardcoded price and at any point in time can a collectible be sold again, removing it from circulation: all with no counterparties. It's an automated economy.

[I designed this for Artonomous](https://github.com/artonomous/artonomous-mvp/issues/45): an autonomous, generative artist. However, this pattern can be employed for any collectible economy.

The key goal here is that whenever a new collectible is put into circulation it must raise the value of the whole economy above and beyond the costs of its addition. As previously mentioned: it adds new cost to the economy through increasing the options (decreasing scarcity). If it brings in more value to the economy than just the value of the collectible, then it marginally was useful.

Put another way: if the value of the new collectible is worth \$1,000, but the negative cost to the economy is say -\$2,000 because now there's too many collectibles, it shouldn't be brought into circulation. It's hard to measure the exact negative effects: however, by employing an automated market maker through a bonding curve, you can get aggregate market outcomes from individual desires to collect.

**Here's how it works in practice.**

Let's assume there's a collection of unique virtual collectibles for Harry Potter. The team behind it designs about 100 unique collectibles as a start. None of these are in circulation and collectors don't know what they are.

When the economy starts, 5 unique collectibles are offered for sale (eg a wand, or a crazy candy). It costs \$1 to buy one.

A collector comes and buys the virtual wand. That \$1 now goes into a pool.

A new collectible gets added such that there is always 5 new ones to buy. 

The price automatically rises to \$2. Another collector comes along and buys the crazy candy collectible.

The next few collectors come along such that the 10th collectible is now worth \$10 and is bought by the 10th collector. The collected money in the pot now stands at \$55.

At any point if someone doesn't want their collectible anymore they can sell it back to economy. The price offered is the price for the previous collectible. Thus anyone could technically sell their collectible for \$10 if they wanted to. If they choose to sell, this starts an auction, where-upon anyone can buy it from the current owner at that price. If no one wants it, this collectible is removed from circulation and the price goes down again. Whilst an auction exists, no one can buy a new collectible. If half the collectibles are sold and removed from circulation, then the price goes back down to \$5. These collectors get some money back (either a profit or loss depending when they bought or sold).

Thus: All the collectibles at certain points in the economy have a floor price. If a new collectible gets added into circulation, the price rises. This creates sell pressure on the current collectors. If they feel their collectible has risen in value enough, then they can choose to sell it, bringing the economy down a peg.

The important part is that when a new collectible joins the economy, whomever is willing to pay the price to reduce overall scarcity, does it such that overall economy goes up along with the price per collectible.

Whatever 5 collectibles are available to buy at each stage in the economy needs to be such that people are willing to buy them. Whatever those 5 are can be determined in various ways: it can be random and never allowed to change. It can cycle/shift at regular intervals. OR, existing collectors can vote which should become available, adding a curation market.

**The Missing \$10 collectors?**

In this case, there's a clear case for existing collectors to allow inflation of the collection. If someone wants to take a new collectible from the conveyor belt, it increases the value of everyone's pie.

What this means, however, is that over time, all low-valued collectibles will be removed from circulation. If demand grows, then it will eventually represent a collection akin to a popular artist. All their works become worth a lot.

This mechanism excludes the cohort of small-time \$10-\$100 collectors from the economy at the cost of maintaining scarcity. I feel there's more to explore here. Will keep introspecting.

**Adding Harberger Collectibles**

I previously wrote about the creation of "[Patronage As An Asset Class](https://blog.simondlr.com/patronage-as-an-asset-class/)": using Harberger/COST ownership of collectibles. The linked blogpost contains information about Harberger Tax and how it works.

In short: if you own a virtual collectible, you always have to specify a sale price. You can't set a very high price, like \$100 billion, because you have to pay a percentage rate per year (eg 5%) to keep owning it towards a beneficiary of the collectible (eg, the creator).

What I enjoy about them is that it increases turnover of the collectible: more will hold it over time, because it will be costly to exclude it from the economy. In addition, it generates two new signals: who holds it the longest (a sign of patronage) and how much was paid to beneficiary of the collectible.

Since a generative economy has a sink: a floor price to sell a collectible at, it keeps the economy growing & shrinking depending on interest. What's interesting about adding Harberger Collectibles is that it adds more revenue to the economy along with ensuring that only the truly valuable collectibles remain. It becomes more costly to keep them.

If the collectible's price (which always has to be set) goes below the threshold of the floor price, someone can immediately buy it and sell it back for a profit, ensuring a form of garbage collection on the collectible economy.

This does add a cost on the collectible owners, however: they have to be aware of how the economy grows as to avoid their collectible being garbage collected for a profit.

This cost on the economy however is buffeted by the ability for it to generate cashflow and revenue. The revenue from the Harberger tax can either go into the bonding curve itself, increasing the value of garbage collection over time OR go towards the builders of the collectible, ensuring that new collectibles are minted in order to keep up with demand.

The possibilities are myriad.

**Conclusion:**

In maximising a blockchain collectible economy, there's often a trade-off in its size (and scarcity): too few and you exclude participants and too many and you reduce the value proposition.

This process can be automated with a new economy to generate and bring collectibles into (and out of) circulation using an automated bonding curve market maker.

By adding a harberger tax to the collectibles, the collectible creators can collect revenue to create more collectibles.

PS: An interesting variant of this is available at [WrappedKitties](https://wrappedkitties.com/). You exchange a CryptoKitty for a new token (\$WCK). You can then buy/sell these WCK tokens, allowing you to burn one to get a CryptoKitty in return.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del();
  await knex('books').insert([
    {
      id: 1, title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', description: "The story follows a young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss. Despite its style as a children's book, The Little Prince makes observations about life, adults and human nature.",
    },
    {
      id: 2, title: "Harry Potter and the Philosopher's Stone", author: 'J. K. Rowling', description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
    },
    {
      id: 3, title: 'The Hobbit', author: 'J. R. R. Tolkien', description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
    },
    {
      id: 4, title: 'The Lion, the Witch and the Wardrobe', author: 'C. S. Lewis', description: "Most of the novel is set in Narnia, a land of talking animals and mythical creatures that is ruled by the evil White Witch. In the frame story, four English children are relocated to a large, old country house following a wartime evacuation. The youngest, Lucy, visits Narnia three times via the magic of a wardrobe in a spare room. Lucy's three siblings are with her on her third visit to Narnia. In Narnia, the siblings seem fit to fulfill an old prophecy and find themselves adventuring to save Narnia and their own lives. The lion Aslan gives his life to save one of the children; he later rises from the dead, vanquishes the White Witch, and crowns the children Kings and Queens of Narnia. ",
    },
    {
      id: 5, title: 'The Da Vinci Code', author: 'Dan Brown', description: "The novel explores an alternative religious history, whose central plot point is that the Merovingian kings of France were descended from the bloodline of Jesus Christ and Mary Magdalene, ideas derived from Clive Prince's The Templar Revelation (1997) and books by Margaret Starbird. The book also refers to The Holy Blood and the Holy Grail (1982) though Dan Brown has stated that it was not used as research material.",
    },
  ]);
};
